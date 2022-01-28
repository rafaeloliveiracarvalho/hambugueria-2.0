import { access } from "fs";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { api } from "../services/api";

type CartProviderProps = {
  children: ReactNode;
};

type IProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  img_url: string;
  quantity: number;
};

type IUser = {
  email: string;
  name: string;
  cart: IProduct[];
  id: string;
};

interface ICartProvider {
  product: IProduct;
  user: IUser;
  accessToken: string;
}

interface CartContextData {
  cart: IProduct[];
  listCart: (userId: string, accessToken: string) => Promise<void>;
  addToCart: ({ product, user, accessToken }: ICartProvider) => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider = ({ children }: CartProviderProps) => {
  // SET CART
  const [cart, setCart] = useState<IProduct[]>([] as IProduct[]);

  // LIST PRODUCTS CART
  const listCart = useCallback(async (userId: string, accessToken: string) => {
    try {
      const response = await api.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setCart([...response.data.cart]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // ADD PRODUCT TO CART
  const addToCart = useCallback(
    async ({ product, user, accessToken }: ICartProvider) => {
      const { cart: currentCart, id: userId } = user;

      const checkIsInTheCart = currentCart.some(
        (productCart) => productCart.id === product.id,
      );

      if (checkIsInTheCart) {
        currentCart.forEach((productCart) => {
          if (productCart.id === product.id && !!productCart.quantity) {
            productCart.quantity += 1;
          }
        });
      } else {
        product.quantity = 1;
        setCart([...cart, product]);
      }

      try {
        const response = await api.patch(
          `/users/${userId}`,
          { cart: cart },
          { headers: { Authorization: `Bearer ${accessToken}` } },
        );
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );
  return (
    <CartContext.Provider value={{ listCart, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { CartProvider, useCart };

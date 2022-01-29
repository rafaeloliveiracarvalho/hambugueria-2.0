import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { number, string } from "yup/lib/locale";

import { api } from "../services/api";
import { IProductToCart, IUser, IProductToHome } from "../Types";

type CartProviderProps = {
  children: ReactNode;
};

interface CartContextData {
  cart: IProductToCart[];
  listCart: (userId: string, accessToken: string) => Promise<void>;
  addToCart: (
    product: IProductToHome,
    user: IUser,
    accessToken: string,
  ) => Promise<void>;
  updateQuantity: (
    user: IUser,
    accessToken: string,
    productId: string,
    isSum: boolean,
  ) => Promise<void>;
  deleteFromCart: (
    user: IUser,
    accessToken: string,
    productId: string,
  ) => Promise<void>;
  calculateCartTotals: (user: IUser, accessToken: string) => void;
  cartTotalValue: number;
  cartTotalQuantity: number;
  cleanCart: (user: IUser, accessToken: string) => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<IProductToCart[]>([] as IProductToCart[]);
  const [cartTotalValue, setCartTotalValue] = useState(0);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

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
    async (product: IProductToHome, user: IUser, accessToken: string) => {
      const { id: userId } = user;

      const response = await api.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const currentCart = response.data.cart;

      const index = currentCart.findIndex(
        (productCart: IProductToCart) => productCart.id === product.id,
      );

      const checkIsInTheCart = index >= 0;

      if (checkIsInTheCart) {
        currentCart[index].quantity = String(+currentCart[index].quantity + 1);
      } else {
        const productToCart: IProductToCart = { ...product, quantity: "1" };
        currentCart.push(productToCart);
      }

      try {
        const response = await api.patch(
          `/users/${userId}`,
          { cart: currentCart },
          { headers: { Authorization: `Bearer ${accessToken}` } },
        );
      } catch (err) {
        console.log(err);
      }
    },
    [cart],
  );

  // UPDATE QUANTITY
  const updateQuantity = useCallback(
    async (
      user: IUser,
      accessToken: string,
      productId: string,
      isSum: boolean,
    ) => {
      const { id: userId } = user;
      const response = await api.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const currentCart = response.data.cart;

      const index = currentCart.findIndex(
        (productCart: IProductToCart) => productCart.id === productId,
      );

      if (isSum) {
        currentCart[index].quantity = String(+currentCart[index].quantity + 1);
      } else if (!isSum && +currentCart[index].quantity > 1) {
        currentCart[index].quantity = String(+currentCart[index].quantity - 1);
      }

      try {
        const response = await api.patch(
          `/users/${userId}`,
          { cart: currentCart },
          { headers: { Authorization: `Bearer ${accessToken}` } },
        );
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  // DELETE PRODUCT FROM CART
  const deleteFromCart = useCallback(
    async (user: IUser, accessToken: string, productId: string) => {
      const { id: userId } = user;
      const response = await api.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const currentCart = response.data.cart;

      const filteredCart = currentCart.filter(
        (productCart: IProductToCart) => productCart.id !== productId,
      );

      try {
        const response = await api.patch(
          `/users/${userId}`,
          { cart: filteredCart },
          { headers: { Authorization: `Bearer ${accessToken}` } },
        );
      } catch (err) {
        console.log(err);
      }
    },
    [],
  );

  // TOTAL QUANTITY AND VALUE OF PRODUCTS IN CART
  const calculateCartTotals = useCallback(
    async (user: IUser, accessToken: string) => {
      const { id: userId } = user;
      const response = await api.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const currentCart = response.data.cart;

      const totalValue = currentCart.reduce(
        (total: number, product: IProductToCart) =>
          total + Number(product.price) * Number(product.quantity),
        0,
      );

      const totalQuantity = currentCart.reduce(
        (total: number, product: IProductToCart) =>
          total + Number(product.quantity),
        0,
      );

      setCartTotalValue(totalValue);
      setCartTotalQuantity(totalQuantity);
    },
    [],
  );

  // CLEAN CART
  const cleanCart = useCallback(async (user: IUser, accessToken: string) => {
    const { id: userId } = user;
    try {
      const response = await api.patch(
        `/users/${userId}`,
        { cart: [] },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      setCart([] as IProductToCart[]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        listCart,
        cart,
        addToCart,
        updateQuantity,
        deleteFromCart,
        cartTotalQuantity,
        cartTotalValue,
        calculateCartTotals,
        cleanCart,
      }}
    >
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

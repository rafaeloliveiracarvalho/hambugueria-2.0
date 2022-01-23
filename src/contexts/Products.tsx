import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { api } from "../services/api";

type ProductsProviderData = {
  children: ReactNode;
};

interface IProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  img_url: string;
}

interface ProductsContextData {
  products: IProduct[];
  listProducts: () => Promise<void>;
  searchProducts: (value: string) => Promise<void>;
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
);

const ProductsProvider = ({ children }: ProductsProviderData) => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  const listProducts = useCallback(async () => {
    try {
      const response = await api.get("/products");
      setProducts([...response.data]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const searchProducts = useCallback(async (value: string) => {
    try {
      const responseByName = await api.get(`/products?name_like=${value}`);
      const responseByCategory = await api.get(
        `/products?category_like=${value}`,
      );

      if (
        responseByName.data.length === 0 &&
        responseByCategory.data.length === 0
      ) {
        setProducts([] as IProduct[]);
      } else if (
        responseByName.data.length === 0 &&
        responseByCategory.data.length > 0
      ) {
        setProducts([...responseByCategory.data]);
      } else if (
        responseByName.data.length > 0 &&
        responseByCategory.data.length === 0
      ) {
        setProducts([...responseByName.data]);
      } else {
        const onlyByName = responseByName.data.filter(
          (productByName: IProduct) =>
            !responseByCategory.data.some(
              (productByCategory: IProduct) =>
                productByCategory.id === productByName.id,
            ),
        );
        const fondProducts = onlyByName
          .concat(responseByCategory.data)
          .sort((a: IProduct, b: IProduct) => {
            if (+a.id > +b.id) {
              return 1;
            }
            if (+a.id < +b.id) {
              return -1;
            }
            return 0;
          });
        setProducts([...fondProducts]);
      }
    } catch (err) {}
  }, []);

  return (
    <ProductsContext.Provider
      value={{ listProducts, searchProducts, products }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts must be used within an ProductsProvider");
  }

  return context;
};

export { ProductsProvider, useProducts };

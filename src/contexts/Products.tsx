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

  return (
    <ProductsContext.Provider value={{ listProducts, products }}>
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

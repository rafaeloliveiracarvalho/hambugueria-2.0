import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./Cart";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => (
  <AuthProvider>
    <ProductsProvider>
      <CartProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CartProvider>
    </ProductsProvider>
  </AuthProvider>
);

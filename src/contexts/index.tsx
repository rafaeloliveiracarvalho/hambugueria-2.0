import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { ProductsProvider } from "./Products";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => (
  <AuthProvider>
    <ProductsProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ProductsProvider>
  </AuthProvider>
);

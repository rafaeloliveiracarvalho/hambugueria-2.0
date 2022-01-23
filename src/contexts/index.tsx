import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => (
  <AuthProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </AuthProvider>
);

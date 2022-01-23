import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface IButton extends ButtonProps {
  children: string;
}

export const Button = ({ children, ...rest }: IButton) => {
  return <ChakraButton {...rest}>{children}</ChakraButton>;
};

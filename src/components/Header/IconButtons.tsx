import React, { ReactNode } from "react";
import { Center } from "@chakra-ui/react";
import CartQuantityDisplay from "./CartQuantityDisplay";

interface IconButtonProps {
  children: ReactNode;
  isCart?: boolean;
}

const IconButton = ({ children, isCart }: IconButtonProps) => (
  <Center
    as="button"
    ml="2"
    w="fit-content"
    h={8}
    fontSize="x-large"
    color="gray.300"
    cursor="pointer"
    position="relative">
    {isCart && <CartQuantityDisplay />}
    {children}
  </Center>
);

export default IconButton;

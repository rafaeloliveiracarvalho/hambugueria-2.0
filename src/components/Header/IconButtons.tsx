import React, { ReactNode } from "react";
import { Center, CenterProps } from "@chakra-ui/react";
import CartQuantityDisplay from "./CartQuantityDisplay";
import { useAuth } from "../../contexts/AuthContext";

interface IconButtonProps extends CenterProps {
  children: ReactNode;
  isCart?: boolean;
}

const IconButton = ({ children, isCart, ...rest }: IconButtonProps) => {
  const { accessToken } = useAuth();
  return (
    <Center
      as="button"
      ml="2"
      w="fit-content"
      h={8}
      fontSize="x-large"
      color="gray.300"
      cursor="pointer"
      position="relative"
      {...rest}
    >
      {isCart && accessToken && <CartQuantityDisplay />}
      {children}
    </Center>
  );
};

export default IconButton;

import React, { useEffect } from "react";
import { Center, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { useCart } from "../../contexts/Cart";
import { useAuth } from "../../contexts/AuthContext";

const CartQuantityDisplay = () => {
  const { user, accessToken } = useAuth();
  const { calculateCartTotals, cartTotalQuantity, cart } = useCart();

  useEffect(() => {
    calculateCartTotals(user, accessToken);
  }, [cart]);

  return (
    <Center
      w={5}
      h={6}
      bgColor={theme.colors.primary}
      borderRadius="7px"
      position="absolute"
      top="-30%"
      left="60%"
    >
      <Text fontSize="14px" color="white" fontWeight="bold">
        {cartTotalQuantity}
      </Text>
    </Center>
  );
};

export default CartQuantityDisplay;

import React from "react";
import { Center, Text } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

const CartQuantityDisplay = () => {
  return (
    <Center
      w={5}
      h={6}
      bgColor={theme.colors.primary}
      borderRadius="7px"
      position="absolute"
      top="-30%"
      left="60%">
      <Text fontSize="14px" color="white" fontWeight="bold">
        5
      </Text>
    </Center>
  );
};

export default CartQuantityDisplay;

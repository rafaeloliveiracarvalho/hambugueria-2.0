import {
  Button,
  Divider,
  HStack,
  ModalBody,
  ModalFooter,
  Text,
  VStack,
} from "@chakra-ui/react";

import { CartProductCard } from "../CartProductCard";
import { IProductToCart as IProduct } from "../../../Types";
import { useCart } from "../../../contexts/Cart";
import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";

interface IModalCart {
  cart: IProduct[];
}

export const NoEmptyCartModal = ({ cart }: IModalCart) => {
  const { cartTotalValue, calculateCartTotals, cleanCart } = useCart();
  const { user, accessToken } = useAuth();

  const moneyFormatter = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    calculateCartTotals(user, accessToken);
  }, [cart]);

  return (
    <>
      <ModalBody
        as="section"
        borderBottomRadius="5px"
        minH="110px"
        w="100%"
        bgColor="white"
        paddingX="23px"
        paddingTop="20px"
        paddingBottom="0"
      >
        <VStack as="li">
          {cart.map((product) => (
            <CartProductCard key={product.id} product={product} />
          ))}
        </VStack>
      </ModalBody>
      <ModalFooter flexDirection="column" gap="18px">
        <Divider borderColor="gray.100" borderWidth="2px" />
        <HStack w="100%" justifyContent="space-between">
          <Text>Total</Text>
          <Text>{moneyFormatter.format(cartTotalValue)}</Text>
        </HStack>
        <Button
          onClick={() => cleanCart(user, accessToken)}
          h="60px"
          bgColor="gray.100"
          color="gray.300"
          isFullWidth
          _hover={{
            bgColor: "gray.300",
            color: "gray.100",
          }}
        >
          Remover todos
        </Button>
      </ModalFooter>
    </>
  );
};

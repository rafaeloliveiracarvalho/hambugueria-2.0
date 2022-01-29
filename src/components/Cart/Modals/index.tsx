import React, { useEffect } from "react";

import { useAuth } from "../../../contexts/AuthContext";
import { EmptyCartModal } from "../Modals/EmptyCart";
import { NoEmptyCartModal } from "../Modals/NoEmptyCart";
import { NoLoggedUserCart } from "../Modals/NoLoggedUserCart";
import { IProductToCart as IProduct } from "../../../Types";
import {
  Center,
  Heading,
  HStack,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";

interface IModalCart {
  isOpen: boolean;
  onClose: () => void;
  cart: IProduct[];
}

export const ModalCart = ({ isOpen, onClose, cart }: IModalCart) => {
  const { accessToken, user } = useAuth();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent mt="80px" w="95vw" maxW="500px">
        <ModalHeader
          borderTopRadius="5px"
          h="60px"
          w="100%"
          bgColor="primary"
          paddingX="23px"
          paddingY="auto"
        >
          <HStack justifyContent="space-between">
            <Heading as="h2" fontSize="18px" fontWeight={700} color="white">
              Carrinho de compras
            </Heading>
            <Center
              onClick={onClose}
              w="60px"
              h="60px"
              transform="translateX(40%)"
              cursor="pointer"
            >
              <IoMdClose strokeWidth={20} color="white" />
            </Center>
          </HStack>
        </ModalHeader>
        {!accessToken ? (
          <NoLoggedUserCart />
        ) : cart.length > 0 ? (
          <NoEmptyCartModal cart={cart} />
        ) : (
          <EmptyCartModal />
        )}
      </ModalContent>
    </Modal>
  );
};

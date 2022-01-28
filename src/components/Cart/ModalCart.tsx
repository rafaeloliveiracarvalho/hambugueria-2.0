import React from "react";
import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { CartProductCard } from "./CartProductCard";

type IProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  img_url: string;
  quantity: number;
};

interface IModalCart {
  isOpen: boolean;
  onClose: () => void;
  cart: IProduct[];
}

export const ModalCart = ({ isOpen, onClose, cart }: IModalCart) => {
  if (cart.length === 0) {
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
          <ModalBody
            as={Center}
            borderBottomRadius="5px"
            minH="260px"
            w="100%"
            bgColor="white"
            paddingX="23px"
            paddingY="20px"
            flexDirection="column"
            gap={4}
          >
            <Heading as="h4" fontSize="20px" fontWeight={700} color="gray.800">
              Sua sacola está vazia
            </Heading>
            <Text as="p" fontSize="15px" fontWeight={400} color="gray.300">
              Adicione itens
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

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
        <ModalBody
          borderBottomRadius="5px"
          minH="110px"
          w="100%"
          bgColor="white"
          paddingX="23px"
          paddingTop="20px"
          paddingBottom="0"
        >
          {cart.map((product) => (
            <CartProductCard product={product} />
          ))}
        </ModalBody>
        <ModalFooter flexDirection="column" gap="18px">
          <Divider borderColor="gray.100" borderWidth="2px" />
          <HStack w="100%" justifyContent="space-between">
            <Text>Total</Text>
            <Text>R$ 14,00</Text>
          </HStack>
          <Button
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
      </ModalContent>
    </Modal>
  );
};

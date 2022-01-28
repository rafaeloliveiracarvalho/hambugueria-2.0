import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { CartProductCard } from "../CartProductCard";

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

export const NoEmptyCartModal = ({ isOpen, onClose, cart }: IModalCart) => (
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

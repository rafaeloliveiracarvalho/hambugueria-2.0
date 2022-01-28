import {
  Center,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";

interface IModalCart {
  isOpen: boolean;
  onClose: () => void;
}

export const EmptyCartModal = ({ isOpen, onClose }: IModalCart) => (
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

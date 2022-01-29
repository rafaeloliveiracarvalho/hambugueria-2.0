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

export const EmptyCartModal = () => (
  <>
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
  </>
);

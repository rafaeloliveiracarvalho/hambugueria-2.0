import {
  Button,
  Center,
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
import { useHistory } from "react-router-dom";

interface IModalCart {
  isOpen: boolean;
  onClose: () => void;
}

export const NoLoggedUserCart = () => {
  const history = useHistory();
  return (
    <>
      <ModalBody
        as={Center}
        borderBottomRadius="5px"
        minH="100px"
        w="100%"
        bgColor="white"
        paddingX="23px"
        paddingY="20px"
        flexDirection="column"
        gap={4}
      >
        <Heading
          as="h4"
          fontSize="20px"
          fontWeight={700}
          color="gray.800"
          textAlign="center"
        >
          Entre em sua conta para visualiza os itens do carrinho
        </Heading>
      </ModalBody>
      <ModalFooter pt="0">
        <Button
          type="button"
          onClick={() => history.push("/signin")}
          w="100%"
          h="60px"
          bgColor="primary"
          color="white"
          borderColor="primary"
          borderWidth="1px "
          borderRadius="8px"
          _hover={{
            bgColor: "primaryLight",
            borderColor: "primaryLight",
          }}
        >
          Entrar
        </Button>
      </ModalFooter>
    </>
  );
};

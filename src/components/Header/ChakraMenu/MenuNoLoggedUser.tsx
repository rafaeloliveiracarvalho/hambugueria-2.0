import { Center, Heading, MenuItem } from "@chakra-ui/react";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { theme } from "../../../styles/theme";

export const MenuNoLoggedUser = () => {
  const history = useHistory();
  return (
    <>
      <MenuItem
        as="button"
        onClick={() => history.push("/signin")}
        paddingY="20px"
        paddingX="20px"
        icon={
          <Center
            w="60px"
            h="60px"
            bgColor="primaryExtraLight"
            fontSize="x-large"
            borderRadius="md"
          >
            <FiLogIn color={theme.colors.primary} />
          </Center>
        }
        _hover={{
          bgColor: "gray.50",
        }}
        _focus={{
          borderColor: "gray.50",
        }}
      >
        <Heading as="h3" fontSize="lg">
          Entrar
        </Heading>
      </MenuItem>
      <MenuItem
        as="button"
        onClick={() => history.push("/signup")}
        paddingY="20px"
        paddingX="20px"
        icon={
          <Center
            w="60px"
            h="60px"
            bgColor="primaryExtraLight"
            fontSize="x-large"
            borderRadius="md"
          >
            <FiUserPlus color={theme.colors.primary} />
          </Center>
        }
        _hover={{
          bgColor: "gray.50",
        }}
        _focus={{
          borderColor: "gray.50",
        }}
      >
        <Heading as="h3" fontSize="lg">
          Criar uma conta
        </Heading>
      </MenuItem>
    </>
  );
};

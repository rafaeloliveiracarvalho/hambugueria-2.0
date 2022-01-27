import {
  Center,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiLogOut, FiMenu, FiLogIn, FiUserPlus } from "react-icons/fi";
import { useAuth } from "../../contexts/AuthContext";

import { theme } from "../../styles/theme";

type ChakraMenuProps = {
  strokeWidth: number;
};

const MenuItemsLoggedUser = () => (
  <>
    <MenuItem
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
const MenuItemsNoLoggedUser = () => (
  <>
    <MenuItem
      paddingY="20px"
      paddingX="20px"
      icon={
        <Center
          w="60px"
          h="60px"
          bgColor="secondaryExtraLight"
          fontSize="x-large"
          borderRadius="md"
        >
          <FiLogOut color={theme.colors.secondary} />
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
        Sair
      </Heading>
    </MenuItem>
  </>
);

export const ChakraMenu = ({ strokeWidth }: ChakraMenuProps) => {
  const { accessToken } = useAuth();
  return (
    <Menu
      direction="rtl"
      arrowPadding={20}
      placement="top-end"
      colorScheme="purple"
    >
      <MenuButton
        as={IconButton}
        aria-label="Options"
        variant="outline"
        icon={<FiMenu strokeWidth={strokeWidth} />}
        bgColor="gray.50"
        color="gray.300"
        borderColor="gray.50"
        fontSize="30px"
        fontWeight="600"
        outline="none"
        _hover={{
          borderColor: "gray.50",
          outline: "none",
        }}
        _focus={{
          borderColor: "gray.50",
          outline: "none",
        }}
        _active={{
          borderColor: "gray.50",
        }}
      />

      <MenuList zIndex={10} width="xs">
        {true ? <MenuItemsNoLoggedUser /> : <MenuItemsLoggedUser />}
      </MenuList>
    </Menu>
  );
};

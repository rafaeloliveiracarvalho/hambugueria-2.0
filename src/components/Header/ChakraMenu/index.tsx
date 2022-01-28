import { IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { useAuth } from "../../../contexts/AuthContext";
import { MenuNoLoggedUser } from "./MenuNoLoggedUser";
import { MenuLoggedUser } from "./MenuLoggedUser";

interface ChakraMenuProps {
  strokeWidth: number;
}

export const ChakraMenu = ({ strokeWidth }: ChakraMenuProps) => {
  const { accessToken } = useAuth();
  console.log(accessToken);
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
        {accessToken ? <MenuLoggedUser /> : <MenuNoLoggedUser />}
      </MenuList>
    </Menu>
  );
};

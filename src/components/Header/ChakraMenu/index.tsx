import {
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";

import { useAuth } from "../../../contexts/AuthContext";
import { MenuNoLoggedUser } from "./MenuNoLoggedUser";
import { MenuLoggedUser } from "./MenuLoggedUser";

interface ChakraMenuProps {
  strokeWidth: number;
}

export const ChakraMenu = ({ strokeWidth }: ChakraMenuProps) => {
  const { accessToken, user } = useAuth();
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
        icon={<FaRegUserCircle strokeWidth={strokeWidth} />}
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
        {accessToken ? (
          <>
            <MenuItem as="div" paddingX="20px">
              <Heading as="h2" fontSize="lg" color="gray.300" textAlign="start">
                {user.name}
              </Heading>
            </MenuItem>
            <MenuLoggedUser />
          </>
        ) : (
          <MenuNoLoggedUser />
        )}
      </MenuList>
    </Menu>
  );
};

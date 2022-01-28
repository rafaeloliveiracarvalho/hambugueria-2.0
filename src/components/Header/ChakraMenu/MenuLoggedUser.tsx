import { Center, Heading, MenuItem } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

import { theme } from "../../../styles/theme";

export const MenuLoggedUser = () => {
  const { signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = () => {
    signOut();
    history.push("/signin");
  };

  return (
    <>
      <MenuItem
        as="button"
        onClick={handleSignOut}
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
};

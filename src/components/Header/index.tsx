import React from "react";
import { Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

import Logo from "./Logo";
import IconButton from "./IconButtons";
import { InputSearch } from "./InputSearch";
import { theme } from "../../styles/theme";

const Header = () => {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  const handleSearchMobile = () => {};

  if (isWideScreen) {
    return (
      <Flex
        h="80px"
        w="100%"
        bgColor="gray.50"
        paddingX={4}
        marginLeft="0px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          w="100%"
          maxW={`${theme.sizes.screenMaxWidth}`}
          justifyContent="space-between"
        >
          <Flex align="center">
            <Logo />
          </Flex>
          <HStack spacing={6} h={6}>
            <InputSearch isWideScreen />
            <IconButton isCart>
              <FaShoppingCart strokeWidth={4} />
            </IconButton>
            <IconButton>
              <FiLogOut strokeWidth={4} />
            </IconButton>
          </HStack>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      h="145px"
      w="100%"
      bgColor="gray.50"
      paddingX={4}
      paddingTop={6}
      paddingBottom={4}
      marginLeft="0px"
      justifyContent="space-between"
      alignItems="center"
      flexDir="column"
    >
      <Flex
        w="100%"
        maxW={`${theme.sizes.screenMaxWidth}`}
        justifyContent="space-between"
      >
        <Flex align="center">
          <Logo />
        </Flex>
        <HStack spacing={6} h={6}>
          <IconButton isCart>
            <FaShoppingCart strokeWidth={4} />
          </IconButton>
          <IconButton>
            <FiLogOut strokeWidth={4} />
          </IconButton>
        </HStack>
      </Flex>
      <InputSearch />
    </Flex>
  );
};

export default Header;

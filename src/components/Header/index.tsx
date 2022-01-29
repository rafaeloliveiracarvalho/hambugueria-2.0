import React from "react";
import { Center, Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

import Logo from "./Logo";
import IconButton from "./IconButtons";
import { InputSearch } from "./InputSearch";
import { theme } from "../../styles/theme";
import { ChakraMenu } from "./ChakraMenu";
import { useAuth } from "../../contexts/AuthContext";

type THeader = {
  onModalCartOpen: () => void;
};

const Header = ({ onModalCartOpen }: THeader) => {
  const { accessToken } = useAuth();
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Flex
        h={["145px", "145px", "80px"]}
        w="100%"
        bgColor="gray.50"
        paddingX={4}
        paddingBottom={[4, 4, 0]}
        marginLeft="0px"
        justifyContent={["space-between", "space-between", "center"]}
        flexDir={["column", "column", "row"]}
      >
        <Flex
          w="100%"
          h="100%"
          maxW={`${theme.sizes.screenMaxWidth}`}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex align="center">
            <Logo />
          </Flex>
          <HStack spacing={6} h={6}>
            {isWideScreen && <InputSearch isWideScreen />}
            <Center onClick={onModalCartOpen} flexShrink={0}>
              <IconButton isCart ml={0}>
                <FaShoppingCart strokeWidth={4} />
              </IconButton>
            </Center>
            <Center>
              <ChakraMenu strokeWidth={3} />
            </Center>
          </HStack>
        </Flex>
        {!isWideScreen && <InputSearch />}
      </Flex>
    </>
  );
};

export default Header;

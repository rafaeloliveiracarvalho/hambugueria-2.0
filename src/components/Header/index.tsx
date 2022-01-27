import React from "react";
import {
  Center,
  Flex,
  HStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "./Logo";
import IconButton from "./IconButtons";
import { InputSearch } from "./InputSearch";
import { theme } from "../../styles/theme";
import { Menu } from "./Menu";
import { useAuth } from "../../contexts/AuthContext";
import { ChakraMenu } from "./ChakraMenu";

const Header = () => {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      {/* <Menu isOpen={isOpen} onClose={onClose} /> */}
      <Flex
        h={["145px", "145px", "80px"]}
        w="auto"
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
            <Center onClick={onToggle} flexShrink={0}>
              <IconButton isCart mr={2} ml={0}>
                <FaShoppingCart strokeWidth={4} />
              </IconButton>
            </Center>
            {/* <Center onClick={onToggle}>
              <IconButton>
                <FiLogOut strokeWidth={4} />
              </IconButton>
            </Center> */}
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

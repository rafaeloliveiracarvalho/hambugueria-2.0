import React from "react";
import {
  Center,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { theme } from "../../styles/theme";

type InputSearch = {
  isWideScreen?: boolean;
};

export const InputSearch = ({ isWideScreen }: InputSearch) => {
  return (
    <InputGroup
      w="100%"
      maxW={isWideScreen ? "400px" : "none"}
      justifyContent="center"
    >
      <Input
        h="60px"
        placeholder="Digitar pesquisa"
        variant="filled"
        borderWidth="2px"
        borderColor="gray.100"
        bgColor="white"
        _focus={{
          borderColor: `${theme.colors.gray[800]}`,
          backgroundColor: "#fff",
          _placeholder: {
            color: `${theme.colors.gray[600]}`,
          },
        }}
        _placeholder={{ color: `${theme.colors.gray[100]}` }}
        _hover={{
          borderColor: `${theme.colors.gray[100]}`,
          backgroundColor: "#fff",
        }}
      />
      <InputRightElement
        width="53px"
        height="40px"
        mr="10px"
        top="50%"
        transform="translateY(-50%)"
        cursor="pointer"
      >
        <Center
          w="100%"
          h="100%"
          bgColor={theme.colors.primary}
          _hover={{
            backgroundColor: `${theme.colors.primaryLight}`,
          }}
          transition="0.25s"
          borderRadius="8px"
        >
          <FaSearch height="16px" color="white" />
        </Center>
      </InputRightElement>
    </InputGroup>
  );
};

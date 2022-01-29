import React, { ChangeEvent } from "react";
import { Center, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";

import { theme } from "../../styles/theme";
import { useProducts } from "../../contexts/Products";

type InputSearch = {
  isWideScreen?: boolean;
};

type FormData = {
  value: string;
};

export const InputSearch = ({ isWideScreen }: InputSearch) => {
  const { handleSubmit, register } = useForm<FormData>();
  const { searchProducts, listProducts } = useProducts();

  const handleSearchProducts = ({ value }: FormData) => {
    searchProducts(value);
  };

  const emptyInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      listProducts();
    }
  };

  return (
    <InputGroup
      as="form"
      onSubmit={handleSubmit(handleSearchProducts)}
      w="100%"
      maxW={isWideScreen ? "400px" : "none"}
      justifyContent="center"
    >
      <Input
        {...register("value")}
        h="60px"
        placeholder="Digitar pesquisa"
        variant="filled"
        borderWidth="2px"
        borderColor="gray.100"
        bgColor="white"
        onChange={(e: ChangeEvent<HTMLInputElement>) => emptyInput(e)}
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
          as="button"
          type="submit"
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

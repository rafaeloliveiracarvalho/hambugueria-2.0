import React from "react";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Input } from "../../components/Form/Input";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
}

interface ISignInForm {
  handleSignIn: () => void;
  register: UseFormRegister<SignInFormData>;
  errors: DeepMap<FieldValues, FieldError>;
}

export const SignInForm = ({ handleSignIn, errors, register }: ISignInForm) => {
  return (
    <Flex
      as="form"
      onSubmit={handleSignIn}
      w="100%"
      maxW="500px"
      paddingX="25px"
      paddingY="30px"
      borderColor="gray.100"
      borderWidth="2px"
      borderRadius="5px"
      flexDir="column"
    >
      <Flex w="100%" justifyContent="space-between" alignItems="center" mb="10">
        <Heading fontSize="18px" fontWeight="700" color="gray.800">
          Login
        </Heading>
        <Text
          fontSize="14px"
          fontWeight="500"
          color="gray.300"
          textDecor="underline"
        >
          <Link>Home</Link>
        </Text>
      </Flex>
      <VStack spacing="5">
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        <Input
          label="Senha"
          placeholder="Senha"
          type="password"
          error={errors.password}
          {...register("password")}
        />

        <Button
          type="submit"
          w="100%"
          h="60px"
          bgColor="primary"
          color="white"
          borderColor="primary"
          borderWidth="1px "
          borderRadius="8px"
          _hover={{
            bgColor: "primaryLight",
            borderColor: "primaryLight",
          }}
        >
          Logar
        </Button>
        <Text fontSize="14px" color="gray.300" textAlign="center" maxW="320px">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Text>
        <Button
          type="submit"
          w="100%"
          h="60px"
          bgColor="gray.50"
          color="gray.300"
          borderColor="gray.50"
          borderWidth="1px "
          borderRadius="8px"
          _hover={{
            bgColor: "gray.300",
            color: "gray.50",
            borderColor: "gray.300",
          }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Flex>
  );
};

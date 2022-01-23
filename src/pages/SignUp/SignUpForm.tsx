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

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface ISignUpForm {
  handleSignUp: () => void;
  register: UseFormRegister<SignUpFormData>;
  errors: DeepMap<FieldValues, FieldError>;
}

export const SignUpForm = ({ handleSignUp, errors, register }: ISignUpForm) => {
  return (
    <Flex
      as="form"
      onSubmit={handleSignUp}
      w="100%"
      maxW="500px"
      paddingX="25px"
      paddingY="30px"
      borderColor="gray.100"
      borderWidth="2px"
      borderRadius="5px"
      flexDir="column"
    >
      <Flex w="100%" justifyContent="space-between" alignItems="center" mb="5">
        <Heading fontSize="18px" fontWeight="700" color="gray.800">
          Cadastro
        </Heading>
        <Text
          fontSize="14px"
          fontWeight="500"
          color="gray.300"
          textDecor="underline"
        >
          <HStack gap="4">
            <Link>Home</Link>
            <Link>Login</Link>
          </HStack>
        </Text>
      </Flex>
      <VStack spacing="5">
        <Input
          label="Nome"
          placeholder="Nome"
          type="text"
          error={errors.name}
          {...register("name")}
        />
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
        <Input
          label="Confirmar senha"
          placeholder="Confirmar senha"
          type="password"
          error={errors.confirm_password}
          {...register("confirm_password")}
        />
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

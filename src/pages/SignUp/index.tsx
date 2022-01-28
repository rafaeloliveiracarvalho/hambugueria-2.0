import React from "react";
import { Center, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { SignUpInfo } from "./SignUpInfo";
import { SignUpForm } from "./SignUpForm";
import { api } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const signUpSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "Mínimo de 6 caracteres"),
  confirm_password: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const SignUp = () => {
  const { accessToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const toast = useToast({
    position: "top",
    isClosable: true,
    duration: 3000,
  });

  const successToast = () => {
    const id = "success-toast";
    if (!toast.isActive(id)) {
      toast({
        id,
        title: "Cadastro realizado com sucesso!!!",
        status: "success",
        containerStyle: {
          backgroundColor: "feedback.success",
        },
      });
    }
  };

  const errorToast = () => {
    const id = "error-toast";
    if (!toast.isActive(id)) {
      toast({
        id,
        title: "Email já cadastrado!!!",
        status: "error",
        containerStyle: {
          backgroundColor: "feedback.error",
        },
      });
    }
  };

  const handleSignUp = (data: SignUpFormData) => {
    const { name, email, password } = data;
    api
      .post("/signup", { name, email, password, cart: [] })
      .then((_) => successToast())
      .catch((_) => errorToast());
  };

  if (accessToken) {
    return <Redirect to="/" />;
  }

  return (
    <Center as="main" h="100%">
      <Center
        w="100%"
        minH="100vh"
        maxW="1000px"
        paddingY="40px"
        paddingX={["15px", "15px", "20px"]}
        flexDir={["column", "column", "row", "row"]}
        gap={["15px", "15px", "auto", "auto"]}
        justifyContent={[
          "flex-start",
          "flex-start",
          "space-between",
          "space-between",
        ]}
      >
        <SignUpInfo />
        <SignUpForm
          handleSignUp={handleSubmit(handleSignUp)}
          register={register}
          errors={errors}
        />
      </Center>
    </Center>
  );
};

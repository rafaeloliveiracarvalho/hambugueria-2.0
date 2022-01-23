import React from "react";
import { Center, useBreakpointValue, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInInfo } from "./SignInInfo";
import { SignInForm } from "./SignInForm";
import { useAuth } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";

interface SignInFormData {
  email: string;
  password: string;
}

const signInSchema = yup.object().shape({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const SignIn = () => {
  const { signIn, accessToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
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
        title: "Email ou senha incorretos...",
        status: "error",
        containerStyle: {
          backgroundColor: "feedback.error",
        },
      });
    }
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const handleSignIn = (data: SignInFormData) => {
    signIn(data)
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
        {isWideVersion ? (
          <>
            <SignInForm
              handleSignIn={handleSubmit(handleSignIn)}
              register={register}
              errors={errors}
            />
            <SignInInfo />
          </>
        ) : (
          <>
            <SignInInfo />
            <SignInForm
              handleSignIn={handleSubmit(handleSignIn)}
              register={register}
              errors={errors}
            />
          </>
        )}
      </Center>
    </Center>
  );
};

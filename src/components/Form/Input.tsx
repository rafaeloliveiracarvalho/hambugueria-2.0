import React, {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
  SlideFade,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red.600",
  default: "gray.50",
  // focus: "purple.800",
  filled: "green.600",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, icon: Icon, label, ...rest },
  ref,
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  useEffect(() => {
    if (error) {
      setVariation("error");
    } /* else if (value.length > 1) {
      setVariation("focus");
    } */
  }, [error]);

  // const handleInputFocus = useCallback(() => {
  //   if (!error) {
  //     setVariation("focus");
  //   }
  // }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      setVariation("filled");
    } else if (value.length == 0) {
      SlideFadeClose();
    }
  }, [error, value]);

  const SlideFadeOpen = () => {
    onOpen();
  };

  const SlideFadeClose = () => {
    onClose();
  };

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup flexDirection="column" position="relative">
        {!!label && (
          <SlideFade in={isOpen} offsetY="90px">
            <FormLabel
              color={
                variation !== "default" ? inputVariation[variation] : "gray.800"
              }
              fontSize="12px"
              position="absolute"
              paddingX="5px"
              margin="0"
              zIndex="50"
              left="15px"
              top="0"
              bgColor="white"
              transform="translate(-5px, -50% )"
            >
              {label}
            </FormLabel>
          </SlideFade>
        )}
        {Icon && (
          <InputLeftElement color={inputVariation[variation]} mt="2.5">
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          onFocusCapture={SlideFadeOpen}
          name={name}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          onBlurCapture={handleInputBlur}
          bgColor={variation !== "default" ? "white" : "gray.50"}
          color={
            variation !== "default" ? inputVariation[variation] : "gray.800"
          }
          borderColor={inputVariation[variation]}
          ref={ref}
          variant="filled"
          _hover={{ bgColor: "white" }}
          _placeholder={{
            color: `${
              variation !== "default" ? inputVariation[variation] : "gray.300"
            }`,
            fontSize: "14px",
          }}
          _focus={{
            bgColor: "white",
            borderColor: `${
              variation !== "default" ? inputVariation[variation] : "gray.800"
            }`,
            _placeholder: {
              color: "transparent",
            },
          }}
          paddingX="15px"
          size="lg"
          h="60px"
          {...rest}
        />

        {!!error ? (
          <FormErrorMessage color="red.500" paddingX="15px">
            {error.message}
          </FormErrorMessage>
        ) : (
          <Text color="white" paddingX="15px">
            JKL
          </Text>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);

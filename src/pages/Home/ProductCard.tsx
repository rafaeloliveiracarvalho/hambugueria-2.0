import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

interface IProduct {
  product: {
    id: string;
    name: string;
    category: string;
    price: string;
    img_url: string;
  };
}

export const ProductCard = ({ product }: IProduct) => {
  const [scaleDefine, setScaleDefine] = useState("");
  const { id, name, category, price, img_url } = product;

  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  useEffect(() => {
    if (isWideScreen) {
      setScaleDefine("scale(1.1)");
    } else {
      setScaleDefine("scale(1)");
    }
  }, []);

  const moneyFormatter = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <VStack
      w="100%"
      h="350px"
      maxW="300px"
      color="gray.800"
      marginX="21px"
      marginY="20px"
      alignItems="flex-start"
      flexShrink={0}
      borderWidth="2px"
      borderColor="gray.50"
      borderRadius="5px"
      scrollSnapAlign={["center", "center", "none"]}
      transition="all 0.4s ease-out"
      _hover={
        isWideScreen
          ? {
              borderColor: "primary",
              transformOrigin: "center",
              transform: "scale(1.1)",
              "div > button": {
                bgColor: "primary",
                _hover: {
                  bgColor: "primaryLight",
                },
              },
            }
          : {
              borderColor: "primary",
              transformOrigin: "center",
              transform: "scale(1)",
              "div > button": {
                bgColor: "primary",
                _hover: {
                  bgColor: "primaryLight",
                },
              },
            }
      }
    >
      <Center
        w="100%"
        h="150px"
        bgColor="gray.50"
        paddingY="10px"
        boxSizing="border-box"
      >
        <Image src={img_url} alt="Hamburguer" h="100%" objectFit="contain" />
      </Center>
      <VStack
        w="100%"
        h="100%"
        alignItems="flex-start"
        justifyContent="space-between"
        margin="unset"
        paddingTop="17px"
        paddingBottom="25px"
        paddingX="20px"
      >
        <Heading as="h2" fontSize="18px" fontWeight="700" color="gray.800">
          {name}
        </Heading>
        <Text as="p" fontSize="12px" color="gray.300">
          {category}
        </Text>
        <Text as="p" fontSize="14px" fontWeight="600" color="primary">
          {moneyFormatter.format(Number(price))}
        </Text>
        <Button
          type="button"
          w="106px"
          h="40px"
          bgColor="#bdbdbd"
          color="white"
        >
          Adicionar
        </Button>
      </VStack>
    </VStack>
  );
};

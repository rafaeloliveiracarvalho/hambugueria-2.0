import React from "react";
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
  const { name, category, price, img_url } = product;

  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });

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
      borderColor={isWideScreen ? "gray.50" : "primary"}
      borderRadius="5px"
      scrollSnapAlign={["center", "center", "none"]}
      transition="all 0.4s ease-out"
      transformOrigin="center"
      // {isWideScreen ? () :}
      // _focus={}
      _hover={
        isWideScreen
          ? {
              borderColor: "primary",
              transform: "scale(1.1)",
              "div > button": {
                bgColor: "primary",
                _hover: {
                  bgColor: "primaryLight",
                },
              },
            }
          : {
              // transform: "scale(1)",
              // "div > button": {
              //   bgColor: "primary",
              // },
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
        <Image
          src={require(`../../assets/img/${img_url}`)}
          alt="Hamburguer"
          h="100%"
          objectFit="contain"
        />
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
          bgColor={isWideScreen ? "#bdbdbd" : "primary"}
          color="white"
          //   _pressed={{
          //     bgColor: "primaryLight",
          //   }}
        >
          Adicionar
        </Button>
      </VStack>
    </VStack>
  );
};

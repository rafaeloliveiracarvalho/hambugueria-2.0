import React, { useEffect, useState } from "react";
import {
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { theme } from "../../styles/theme";
import { IProductToCart } from "../../Types";
import { useCart } from "../../contexts/Cart";
import { useAuth } from "../../contexts/AuthContext";

interface IProduct {
  product: IProductToCart;
}

export const CartProductCard = ({ product }: IProduct) => {
  const { updateQuantity, deleteFromCart, listCart } = useCart();
  const { accessToken, user } = useAuth();
  const { name, category, img_url, price, quantity } = product;
  const [convertedPrice, setConvertedPrice] = useState("");
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  const formatAsCurrency = () => {
    const result = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(price));
    setConvertedPrice(result);
  };

  useEffect(() => {
    formatAsCurrency();
  }, []);

  const update = (isSum: boolean) => {
    updateQuantity(user, accessToken, product.id, isSum);
    listCart(user.id, accessToken);
  };

  return (
    <HStack
      w="100%"
      h="80px"
      justifyContent="flex-start"
      borderTopColor="gray.100"
      borderBottomColor="gray.100"
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderLeftRadius="5px"
    >
      <Center w="80px" h="100%" borderRadius="5px" bgColor="gray.100">
        <Image
          w="80%"
          src={require(`../../assets/img/${img_url}`)}
          alt={name}
        />
      </Center>
      <Flex
        h="100%"
        flexGrow={1}
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="space-between"
        paddingY="5px"
        boxSizing="border-box"
      >
        <Heading
          as="h3"
          fontSize="18px"
          color="gray.800"
          overflow="hidden"
          maxW={["9ch", "100%"]}
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          {name}
        </Heading>
        <Text as="p" fontSize="12px" color="gray.300">
          {category}
        </Text>
        <Text as="p" fontWeight="600" fontSize="14px" color="primary">
          {convertedPrice}
        </Text>
      </Flex>
      {isWideScreen ? (
        <HStack h="100%" w="fit-content" paddingY="5px">
          {Number(quantity) > 1 ? (
            <Center as="button" onClick={() => update(false)}>
              <AiFillMinusCircle
                color={theme.colors.secondary}
                fontSize="25px"
              />
            </Center>
          ) : (
            <Center
              as="button"
              onClick={() => deleteFromCart(user, accessToken, product.id)}
            >
              <AiOutlineCloseCircle
                color={theme.colors.secondary}
                fontSize="25px"
              />
            </Center>
          )}
          <Center
            h="70%"
            w="50px"
            borderRadius="8px"
            boxShadow="0 0 10px -5px rgba(10, 10, 10, 0.4)"
          >
            <Text as="span" fontSize="20px">
              {quantity}
            </Text>
          </Center>
          <Center as="button" onClick={() => update(true)}>
            <AiFillPlusCircle color={theme.colors.primary} fontSize="25px" />
          </Center>
        </HStack>
      ) : (
        <HStack h="100%" w="fit-content" paddingY="5px">
          <Center
            h="95%"
            w="50px"
            borderRadius="8px"
            boxShadow="0 0 10px -5px rgba(10, 10, 10, 0.4)"
          >
            <Text as="span" fontSize="20px">
              {quantity}
            </Text>
          </Center>
          <VStack>
            <Center as="button" onClick={() => update(true)}>
              <AiFillPlusCircle color={theme.colors.primary} fontSize="25px" />
            </Center>
            {Number(quantity) > 1 ? (
              <Center as="button" onClick={() => update(false)}>
                <AiFillMinusCircle
                  color={theme.colors.secondary}
                  fontSize="25px"
                />
              </Center>
            ) : (
              <Center
                as="button"
                onClick={() => deleteFromCart(user, accessToken, product.id)}
              >
                <AiOutlineCloseCircle
                  color={theme.colors.secondary}
                  fontSize="25px"
                />
              </Center>
            )}
          </VStack>
        </HStack>
      )}
    </HStack>
  );
};

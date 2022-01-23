import React from "react";
import { Flex, Image, HStack, Center, Text, Grid } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";

import Logo from "../../assets/logo.svg";
import { theme } from "../../styles/theme";

export const SignUpInfo = () => (
  <Flex as="section" w="100%" flexDirection="column" maxW="500px">
    <Image src={Logo} width="240px" objectFit="contain" mb="30px" />
    <HStack
      width="100%"
      maxW={["500px", "500px", "385px"]}
      h="95px"
      padding="15px"
      borderColor="gray.100"
      borderWidth="1px"
      borderRadius="5px"
      boxShadow="0 4px 40px -20px rgba(0,0,0,0.25)"
    >
      <Center
        as="button"
        flexShrink={0}
        borderRadius="5px"
        w="60px"
        h="60px"
        mr="12px"
        fontSize="2xl"
        bgColor="primaryLight"
      >
        <FiShoppingBag color={`${theme.colors.primary}`} height="24px" />
      </Center>
      <Text fontSize="14px" color="gray.300" lineHeight="22px">
        A vida é como um sanduíche, é preciso recheá-la com os
        <Text as="span" color="gray.900">
          &nbsp;melhores&nbsp;
        </Text>
        ingredientes.
      </Text>
    </HStack>
    <Grid
      h="fit-content"
      w="fit-content"
      mt="30px"
      display={["none", "none", "grid"]}
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap="23px"
    >
      {Array.apply(0, new Array(18)).map((circle, index) => (
        <Flex
          key={index}
          w="11px"
          h="11px"
          borderRadius="50%"
          bgColor="gray.50"
        />
      ))}
    </Grid>
  </Flex>
);

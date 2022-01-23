import React from "react";
import { Center, HStack, Text } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { theme } from "../../styles/theme";

export const InfoCard = () => (
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
      bgColor="primaryExtraLight"
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
);

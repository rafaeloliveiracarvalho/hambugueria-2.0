import React from "react";
import { Flex, Image, HStack, Center, Text, Grid } from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";

import Logo from "../../assets/logo.svg";
import { theme } from "../../styles/theme";
import { Circles } from "../../components/Info/Circles";
import { InfoCard } from "../../components/Info/InfoCard";

export const SignUpInfo = () => (
  <Flex
    as="section"
    w={["100%", "100%", "fit-content", "fit-content"]}
    flexDirection="column"
    maxW="500px"
  >
    <Image src={Logo} width="240px" objectFit="contain" mb="30px" />
    <InfoCard />
    <Circles />
  </Flex>
);

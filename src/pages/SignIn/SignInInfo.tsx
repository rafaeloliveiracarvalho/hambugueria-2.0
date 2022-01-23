import React from "react";
import { Flex, Image } from "@chakra-ui/react";

import Logo from "../../assets/logo.svg";
import { Circles } from "../../components/Info/Circles";
import { InfoCard } from "../../components/Info/InfoCard";

export const SignInInfo = () => (
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

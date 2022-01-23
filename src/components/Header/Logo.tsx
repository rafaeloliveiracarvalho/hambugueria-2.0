import { Heading, Image, Link } from "@chakra-ui/react";
import React from "react";

import LogoImage from "../../assets/logo.svg";

const Logo = () => (
  <Heading as="h1" alignContent="center">
    <Link href="#" h="fit-content">
      <Image src={LogoImage} w={40} />
    </Link>
  </Heading>
);

export default Logo;

import React from "react";
import { Flex, Grid } from "@chakra-ui/react";

export const Circles = () => (
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
);

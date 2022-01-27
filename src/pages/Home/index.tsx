import React, { useEffect } from "react";
import { Center, useBreakpointValue } from "@chakra-ui/react";

import Header from "../../components/Header";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../../contexts/Products";
import { theme } from "../../styles/theme";

export const Home = () => {
  const { listProducts, products } = useProducts();

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <Header />
      <Center
        as="main"
        w="100%"
        h="100%"
        paddingTop="10px"
        paddingX={[0, 0, 4]}
        paddingBottom="40px"
      >
        <Center
          as="section"
          w={["auto", "auto", "100%"]}
          h="100%"
          maxW={`calc(${theme.sizes.screenMaxWidth} + 50px)`}
          justifyContent={["flex-start", "center", "center", "center"]}
          alignItems={["normal", "normal", "flex-start"]}
          flexWrap={["nowrap", "nowrap", "wrap"]}
          gap={["0", "1", "1", "4"]}
          overflowX={["auto", "auto", "hidden"]}
          scrollSnapType="x mandatory"
          transitionDuration="0.5s"
          transitionProperty="width, alignItems, flexWrap"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Center>
      </Center>
    </>
  );
};

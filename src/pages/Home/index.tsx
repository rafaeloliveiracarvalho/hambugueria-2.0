import React, { useEffect } from "react";
import { Center, Heading, useDisclosure } from "@chakra-ui/react";

import Header from "../../components/Header";
import { ProductCard } from "./ProductCard";
import { useProducts } from "../../contexts/Products";
import { theme } from "../../styles/theme";
import { ModalCart } from "../../components/Cart/Modals";
import { useCart } from "../../contexts/Cart";
import { useAuth } from "../../contexts/AuthContext";

export const Home = () => {
  const { user, accessToken } = useAuth();
  const { cart, listCart } = useCart();
  const { listProducts, products } = useProducts();
  const {
    onClose: onModalCartClose,
    isOpen: isModalCartOpen,
    onOpen: onModalCartOpen,
  } = useDisclosure();

  useEffect(() => {
    listProducts();
  }, []);

  useEffect(() => {
    if (accessToken) {
      listCart(user.id, accessToken);
    }
  }, [cart]);

  return (
    <>
      <ModalCart
        isOpen={isModalCartOpen}
        onClose={onModalCartClose}
        cart={cart}
      />
      <Header onModalCartOpen={onModalCartOpen} />
      <Center
        as="main"
        w="100%"
        h="fit-content"
        paddingTop="10px"
        paddingX={[0, 0, 4]}
        paddingBottom="40px"
      >
        <Center
          as="section"
          w={["auto", "auto", "100%", "100%"]}
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
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <Heading
              color="gray.800"
              fontSize="2xl"
              textAlign="center"
              mt="80px"
            >
              Nenhum produto foi encontrado.
            </Heading>
          )}
        </Center>
      </Center>
    </>
  );
};

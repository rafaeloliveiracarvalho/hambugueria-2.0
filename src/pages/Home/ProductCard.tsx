import React from "react";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export const ProductCard = () => {
  return (
    <VStack
      w="300px"
      h="350px"
      color="gray.800"
      alignItems="flex-start"
      borderWidth="2px"
      borderColor="gray.50"
      borderRadius="5px"
      transition="all 0.3s ease-out"
      _hover={{
        borderColor: "primary",
        transformOrigin: "center",
        transform: "scale(1.1)",
        "div > button": {
          bgColor: "primary",
          _hover: {
            bgColor: "primaryLight",
          },
        },
      }}
    >
      <Center
        w="100%"
        h="150px"
        bgColor="gray.50"
        paddingY="10px"
        boxSizing="border-box"
      >
        <Image
          // src="https://cdn.pixabay.com/photo/2017/09/02/13/38/burger-2707320_960_720.jpg"
          src="https://lh3.googleusercontent.com/wLqnOqcfaOganaKpbFpmUSOb7RJVjF6dr9A5t6mPc4csWEwNQiyduED3zKIQa2jc1IPj-0dVgUQdiRjnvY0eUUYmGd2w6aOwb_lv416rS3zJCA45rszfJ6NJkmZjZO1zFwfneOl4UDo-EDcbaRbfxzmkPc6y7ZR2cTiMrUyK-LVac-4avzetOHI2vYCPkx_4tIxLnb_Ym9drtnStJaaWNGNfafE6aDiaoC8Z97xXQkTO1kl1LH0lIKB1W6bTGF3ejOKParWHZnPuDPuLpkGuanXtP2ZElTI15FOLgvtY5aViayI1RGMfTTq_j43p53y4ur2f97TQlIvDHRdb3SABUJ10Rrzql-mIA7pgs8QCFhQGMh0BqQ0VAizYGUVtoKPrsT3JDuVXvwgAMkTsNYt7d9ruSBQ1sTVhfCtB4WYByGPUj6vjo8wHy0vO1XguKNCeSKxt-Z3Qez-AbnMw2aSl3T7ZgSW4-tTrc_3-NsLRYlaKcd2MZrsMm7_ZlsqYsT3kS235eoT6XwajtpyMjupo8B9J3abHvmQLfW6_GRmxKkY5aeUNAvVox5bNapSg0V5aUMRX6scB1ZM-sXEvQTg85kJ-H_ugsBu4OyIxXYVDjp_JhckJf3BuStuNco444wruo_mM8IZdOH1dASZinTeIdHnUjC6r_8Wbbstv78nzP6VKG4NQaBEcit5rCi87I3goLqatNLHUJkvnwOy_YMFWwGlu6g=w285-h225-no?authuser=0"
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
          Hamburguer
        </Heading>
        <Text as="p" fontSize="12px" color="gray.300">
          Sanduíches
        </Text>
        <Text as="p" fontSize="14px" fontWeight="600" color="primary">
          R$ 17,90
        </Text>
        <Button
          type="button"
          w="106px"
          h="40px"
          bgColor="#bdbdbd"
          color="white"
        >
          Adicionar
        </Button>
      </VStack>
    </VStack>
  );
};

import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";

import { useAuth } from "../../contexts/AuthContext";
import { theme } from "../../styles/theme";
import IconButton from "./IconButtons";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { user, signOut } = useAuth();

  // if (user) {
  //   return (
  //     <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
  //       {/* <DrawerOverlay mt="80px" /> */}
  //       <DrawerContent
  //         ml={[0, 0, "auto", "auto"]}
  //         mt="60px"
  //         mr="60px"
  //         w={["100%", "100%", "450px"]}
  //         borderRadius="8px"
  //         border="1px"
  //         borderColor="gray.100"
  //         color="gray.400"
  //       >
  //         <DrawerHeader
  //           p="15px 20px"
  //           borderBottomWidth="1px"
  //           borderColor="gray.100"
  //           color="gray.400"
  //         >
  //           {user.name}
  //         </DrawerHeader>
  //         <DrawerBody p="20px">
  //           <Flex
  //             align="center"
  //             onClick={signOut}
  //             _hover={{ cursor: "pointer" }}
  //           >
  //             <Center
  //               w="60px"
  //               h="60px"
  //               bg="red.600"
  //               fontSize="2xl"
  //               borderRadius="md"
  //             >
  //               <FiLogOut color={theme.colors.white} />
  //             </Center>
  //             <Box ml={4}>
  //               <Heading as="h2" fontSize="lg">
  //                 Sair da minha conta
  //               </Heading>
  //               <Text color="gray.300" fontSize="sm">
  //                 Sair da minha conta
  //               </Text>
  //             </Box>
  //           </Flex>
  //         </DrawerBody>
  //       </DrawerContent>
  //     </Drawer>
  //   );
  // }

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent
        ml={[0, 0, "auto", "auto"]}
        mt={["140px", "140px", "75px"]}
        mr={[4, 4, "60"]}
        w={["100%", "100%", "300px"]}
        borderRadius="8px"
        border="1px"
        borderColor="gray.100"
        color="gray.400"
      >
        <DrawerBody p="20px">
          <VStack alignItems="flex-start" spacing={5}>
            <Flex
              align="center"
              onClick={signOut}
              _hover={{ cursor: "pointer" }}
            >
              <Center
                w="60px"
                h="60px"
                bgColor="primary"
                fontSize="2xl"
                borderRadius="md"
              >
                <FiLogIn color={theme.colors.white} />
              </Center>
              <Box ml={4}>
                <Heading as="h2" fontSize="lg" color="gray.700">
                  Fazer login
                </Heading>
              </Box>
            </Flex>
            <Flex
              align="center"
              onClick={signOut}
              _hover={{ cursor: "pointer" }}
            >
              <Center
                w="60px"
                h="60px"
                bg="red.600"
                fontSize="x-large"
                borderRadius="md"
              >
                <FiUserPlus color={theme.colors.white} />
              </Center>

              <Box ml={4}>
                <Heading as="h2" fontSize="lg" color="gray.700">
                  Criar uma conta
                </Heading>
              </Box>
            </Flex>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

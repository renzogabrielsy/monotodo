import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  theme,
  Grid,
  Flex
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import ToDoApp from "./ToDoApp";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box //canvas
      textAlign="center"
      fontSize="xl"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      margin={5}
      fontFamily='Roboto Mono'
    >
      <ToDoApp />
    </Box>
  </ChakraProvider>
);

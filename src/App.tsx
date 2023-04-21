import { ChakraProvider, Box, theme } from "@chakra-ui/react";
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
      fontFamily="Roboto Mono"
    >
      <ToDoApp />
    </Box>
  </ChakraProvider>
);

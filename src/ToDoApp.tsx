import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  theme,
  Grid,
  Flex,
  useColorMode,
  Accordion
} from "@chakra-ui/react";
import ToDoItem from "./ToDoItem";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

export default function ToDoApp() {
  return (
    <Grid //app object
      minH="35em"
      minWidth="20em"
      padding={1}
      border="2px"
      borderColor="blackAlpha.600"
      borderRadius={45}
      boxShadow="dark-lg"
      p="6"
      rounded="md"
    >
      <Flex direction="column">
        <Flex justifyContent="flex-end">
          <ColorModeSwitcher />
        </Flex>
        <Flex direction="column">
          <Logo h="5vmax" pointerEvents="none" margin={10}  />
          <Text fontWeight="extrabold" fontSize="2em">
            To Do App
          </Text>
          <Accordion defaultIndex={[0]} allowMultiple>
            <ToDoItem />

          </Accordion>
        </Flex>
      </Flex>
    </Grid>
  );
}

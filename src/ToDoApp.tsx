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
  Accordion,
} from "@chakra-ui/react";
import ToDoItem from "./ToDoItem";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import AddTask from "./AddTask";

export default function ToDoApp() {
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  return (
    <Grid //app object
      height="38em"
      width="20em"
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
          <Logo h="7vmax" pointerEvents="none" margin={2} />
          <Text fontWeight="extrabold" fontSize="1.7em" margin={5}>
            To Do App
          </Text>
          <AddTask />
          <Flex justify="center">
            <Accordion
              defaultIndex={[]}
              allowMultiple
              overflowY="scroll"
              height="17em"
            >
              <ToDoItem />
              <ToDoItem />
              <ToDoItem />
              <ToDoItem />
            </Accordion>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" fontSize="2xs" fontStyle="italic">
        Made by Renzo Sy
      </Flex>
    </Grid>
  );
}

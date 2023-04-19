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
import ToDoList from "./ToDoList";

export default function ToDoApp() {
  return (
    <Grid //app object
      height={{ base: "38em", md: "40.5em" }}
      width="20em"
      padding={1}
      border={{ base: 0, md: "2px" }}
      borderColor={{ base: "blackAlpha.500", md: "blackAlpha.500" }}
      borderRadius={50}
      boxShadow={{ base: 0, md: "dark-lg" }}
      p="6"
      rounded="md"
    >
      <Flex direction="column">
        <Flex justifyContent="flex-end">
          <ColorModeSwitcher />
        </Flex>
        <Flex direction="column">
          <Logo h="5em" pointerEvents="none" margin={2} />
          <Text fontWeight="extrabold" fontSize="1.7em" margin={5}>
            To Do App
          </Text>
          <AddTask />
          <Flex justify="center" marginTop={4}>
            <ToDoList />
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" fontSize="2xs" fontStyle="italic">
        Made by Renzo Sy
      </Flex>
    </Grid>
  );
}

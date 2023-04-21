import { Text, Grid, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import AddTask from "./AddTask";
import ToDoList from "./ToDoList";
import DataSet from "./DataSet";
import { useState, useEffect, Component } from "react";

let listArray: {
  key: number;
  inDate: string;
  dueDate: string;
  taskName: string;
  taskDesc: string;
}[] = DataSet; //separate dummy dataset file

interface task {
  key: number;
  taskName: string;
  inDate: string;
  dueDate: string;
  taskDesc: string;
}

export default function ToDoApp() {
  const [todos, setTodos] = useState<task[]>(listArray);
  const addToDo = (
    newKey: number,
    newName: string,
    newInDate: string,
    newDueDate: string,
    newDesc: string
  ) => {
    setTodos([
      {
        key: newKey,
        taskName: newName,
        inDate: newInDate,
        dueDate: newDueDate,
        taskDesc: newDesc,
      },
      ...todos,
    ]);
  };

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
          <AddTask addToDo={addToDo}/>
          <Flex justify="center" marginTop={4}>
          <ToDoList todos={todos} />
            
            {/* {todos ? <ToDoList todos={todos} /> : null } */}
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" fontSize="2xs" fontStyle="italic">
        Made by Renzo Sy
      </Flex>
    </Grid>
  );
}

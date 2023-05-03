import { Text, Grid, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import AddTask from "./AddTask";
import ToDoList from "./ToDoList";
import DataSet from "./DataSet";
import { useState, useEffect, Component } from "react";


let listArray: {
  key: number;
  id: number;
  dueDate: string;
  taskName: string;
  taskDesc: string;
  completed: boolean;
}[] = DataSet; //separate dummy dataset file

interface task {
  key: number;
  id: number;
  taskName: string;
  dueDate: string;
  taskDesc: string;
  completed: boolean;
}

export default function ToDoApp() {
  const [todos, setTodos] = useState<task[]>(listArray);
  const addToDo = (
    newKey: number,
    newID: number,
    newName: string,
    newDueDate: string,
    newDesc: string,
    completed: boolean
  ) => {
    setTodos([
      {
        key: newKey,
        id: newID,
        taskName: newName,
        dueDate: newDueDate,
        taskDesc: newDesc,
        completed: completed,
      },
      ...todos,
    ]);
  };

  const removeTodo = (todoID: number) => {
    const newTodos = todos.filter((todo) => todo.id !== todoID);
    setTodos(newTodos);
  };

  const editTodo = (
    todoID: number,
    newKey: number,
    newID: number,
    newTask: string,
    newDate: string,
    newDesc: string,
    newCompleted: boolean
  ) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoID
        ? {
            ...todo,
            key: newKey,
            id: newID,
            taskName: newTask,
            dueDate: newDate,
            taskDesc: newDesc,
            completed: newCompleted,
          }
        : todo
    );
    setTodos(updatedTodos)
  };
  console.log(todos);

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
          <AddTask addToDo={addToDo} />
          <Flex justify="center" marginTop={4}>
            <ToDoList todos={todos} removeTodo={removeTodo} editTodo={editTodo}/>

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

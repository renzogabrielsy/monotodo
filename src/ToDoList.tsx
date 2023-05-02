import { Accordion } from "@chakra-ui/react";
import ToDoItem from "./ToDoItem";
import React from "react";
import { useState, useEffect } from "react";

interface todoProps {
  key: number;
  dueDate: string;
  taskName: string;
  taskDesc: string;
}

type Props = { todos: todoProps[] };

export default function ToDoList(props: Props) {
  return (
    <Accordion defaultIndex={[]} allowMultiple overflowY="auto" height="17em">
      {props.todos.map(({ key, dueDate, taskName, taskDesc }) => (
        <ToDoItem
          key={key}
          dueDate={dueDate}
          taskName={taskName}
          taskDesc={taskDesc}
        />
      ))}
    </Accordion>
  );
}

import { Accordion } from "@chakra-ui/react";
import ToDoItem from "./ToDoItem";
import React from "react";
import { useState, useEffect } from "react";

interface ToDoProps {
  key: number;
  inDate: string;
  dueDate: string;
  taskName: string;
  taskDesc: string;
}

type Props = { todos: ToDoProps[] };

export default function ToDoList(props: Props) {
  return (
    <Accordion defaultIndex={[]} allowMultiple overflowY="scroll" height="17em">
      {props.todos.map(({ key, inDate, dueDate, taskName, taskDesc }) => (
        <ToDoItem
          key={key}
          inDate={inDate}
          dueDate={dueDate}
          taskName={taskName}
          taskDesc={taskDesc}
        />
      ))}
    </Accordion>
  );
}

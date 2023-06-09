import { Accordion } from "@chakra-ui/react";
import ToDoItem from "./ToDoItem";
interface todoProps {
  key?: number;
  id?: number;
  dueDate?: string;
  taskName?: string;
  taskDesc?: string;
  completed?: boolean;
}

type Props = {
  todos?: todoProps[];
  removeTodo: (todoID?: string) => void;
  editTodo: (
    todoID?: string,
    newTask?: string,
    newDate?: string,
    newDesc?: string,
    newCompleted?: boolean
  ) => void;
};

export default function ToDoList(props: Props) {
  return (
    <Accordion defaultIndex={[]} allowMultiple overflowY="auto" height="17em">
      {props.todos?.map(
        ({ key, id, dueDate, taskName, taskDesc, completed }) => (
          <ToDoItem
            key={key}
            id={id}
            dueDate={dueDate}
            taskName={taskName}
            taskDesc={taskDesc}
            completed={completed}
            removeTodo={props.removeTodo}
            editTodo={props.editTodo}
          />
        )
      )}
    </Accordion>
  );
}

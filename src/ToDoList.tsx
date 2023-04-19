import { Accordion } from "@chakra-ui/react";
import ToDoItem from "./ToDoItem";



type listArray = {
    id: number,
    inDate: string,
    dueDate: string,
    taskName: string,
    taskDesc: string
}

let listArray = [
  {
    key: 1,
    inDate: "01/01/00",
    dueDate: "01/01/00",
    taskName: "Clean Fishbowl",
    taskDesc: "use proper method of cleaning!!!",
  },
  {
    key: 2,
    inDate: "01/01/00",
    dueDate: "01/01/00",
    taskName: "Clean Fishtank",
    taskDesc: "use proper method of cleaning!!!",
  },
  {
    key: 3,
    inDate: "01/01/00",
    dueDate: "01/01/00",
    taskName: "Clean Toilet",
    taskDesc: "use proper method of cleaning!!!",
  },
];

export default function ToDoList() {
  return (
    <Accordion defaultIndex={[]} allowMultiple overflowY="scroll" height="17em">
      {listArray.map(({key,inDate,dueDate,taskName,taskDesc}) => (
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

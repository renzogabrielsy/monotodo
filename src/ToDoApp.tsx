import { Text, Grid, Flex, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import AddTask from "./AddTask";
import ToDoList from "./ToDoList";
import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import GoogleSignOut from "./GoogleSIgnOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import {
  collection,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ToDoApp() {
  const todosRef = collection(db, `usersdb/${auth.currentUser?.uid}/todos`);
  const [fbTodos]: any = useCollectionData(todosRef);
  console.log(fbTodos);

  let listArray: {
    key?: number;
    id?: number;
    dueDate?: string;
    taskName?: string;
    taskDesc?: string;
    completed?: boolean;
  }[] = fbTodos; //separate dummy dataset file
  console.log(listArray);
  interface task {
    key?: number;
    id?: number;
    dueDate?: string;
    taskName?: string;
    taskDesc?: string;
    completed?: boolean;
  }
  const [todos, setTodos] = useState<task[]>(listArray);
  const addToDo = (
    newKey: number,
    newID: number,
    newName: string,
    newDueDate: string,
    newDesc: string,
    completed: boolean
  ) => {
    const idField: string = Date.now().toString();
    setDoc(doc(db, `usersdb/${auth.currentUser?.uid}/todos`, idField), {
      key: newKey,
      id: newID,
      taskName: newName,
      dueDate: newDueDate,
      taskDesc: newDesc,
      completed: completed,
    });
  };

  const removeTodo = (todoID?: string) => {
    const indexID: any = todoID?.toString();
    deleteDoc(doc(db, `usersdb/${auth.currentUser?.uid}/todos`, indexID));
  };

  const editTodo = (
    todoID?: string,
    newTask?: string,
    newDate?: string,
    newDesc?: string,
    newCompleted?: boolean
  ) => {
    const indexID: any = todoID?.toString();
    updateDoc(doc(db, `usersdb/${auth.currentUser?.uid}/todos`, indexID), {
      taskName: newTask,
      dueDate: newDate,
      taskDesc: newDesc,
      completed: newCompleted,
    });
  };

  const [user] = useAuthState(auth);
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
        <Flex justifyContent="space-between">
          {user ? (<GoogleSignOut />) : <></>}
          <Spacer />
          <ColorModeSwitcher />
        </Flex>
        <Flex direction="column">
          <Logo h="5em" pointerEvents="none" margin={2} />
          <Text marginTop={2} fontSize={15} fontStyle="italic">
            Roboto
          </Text>
          <Text
            fontWeight="extrabold"
            fontSize="1.7em"
            marginBottom={5}
            marginTop={1}
          >
            Monotodo
          </Text>
          {user ? (
            <>
              <AddTask addToDo={addToDo} />
              <Flex justify="center" marginTop={4}>
                <ToDoList
                  todos={listArray}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                />
              </Flex>
            </>
          ) : (
            <GoogleSignIn />
          )}
        </Flex>
      </Flex>
      <Spacer />
      {/* <Flex justify="center" align="center" fontSize="2xs" fontStyle="italic" maxHeight={10}>
        Made by Renzo Sy
      </Flex> */}
    </Grid>
  );
}

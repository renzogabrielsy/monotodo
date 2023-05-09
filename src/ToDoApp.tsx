import {
  collection,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

import {
  Text,
  Grid,
  Flex,
  Spacer,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import AddTask from "./AddTask";
import ToDoList from "./ToDoList";
import GoogleSignIn from "./GoogleSignIn";
import GoogleSignOut from "./GoogleSIgnOut";


export default function ToDoApp() {
  const todosRef = collection(db, `usersdb/${auth.currentUser?.uid}/todos`);
  const [fbTodos, loading, error]: any = useCollectionData(todosRef);
  const [user] = useAuthState(auth);
  const userEmail: string | null | undefined = auth.currentUser?.email
  const userDisplayName: string | null | undefined = auth.currentUser?.displayName
  const userDP: string | null | undefined = auth.currentUser?.photoURL

  let listArray: {
    key?: number;
    id?: number;
    dueDate?: string;
    taskName?: string;
    taskDesc?: string;
    completed?: boolean;
  }[] = fbTodos;

  console.log(fbTodos, loading, error);
  console.log([userEmail, userDisplayName, userDP])

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

  return (
    <Grid //app object
      height={{ base: "38em", md: "40.5em" }}
      width="20em"
      padding={1}
      border={{ base: 0, md: "2px" }}
      borderColor={{ base: "blackAlpha.500", md: "blackAlpha.500" }}
      borderRadius={50}
      boxShadow={{ base: 0, md: "dark-lg" }}
      p="5"
      rounded="md"
    >
      <Flex direction="column">
        <Flex justifyContent="space-between">
          <SkeletonCircle isLoaded={!loading} size="10" ml={2}>
            {user ? <GoogleSignOut /> : <></>}
          </SkeletonCircle>
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
          <SkeletonText
            noOfLines={10}
            spacing={{ base: "5", md: "7" }}
            skeletonHeight="5"
            isLoaded={!loading}
            fadeDuration={1}
            pl={5}
            pr={5}
            height="45vh"
          >
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
              <Flex justify="center" align="center" height="30vh">
                <GoogleSignIn />
              </Flex>
            )}
          </SkeletonText>
        </Flex>
      </Flex>
      <Flex
        justify="center"
        align="flex-end"
        fontSize="2xs"
        fontStyle="italic"
        padding={0}
        mb={3}
      >
        <Flex>Made by Renzo Sy</Flex>
      </Flex>
    </Grid>
  );
}

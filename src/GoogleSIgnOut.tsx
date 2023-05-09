import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button, IconButton } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/functions";
import { GoSignOut } from "react-icons/go";

const firebaseConfig = {
  apiKey: "AIzaSyBvF9RaIkSlg4NyVjc_I8GNDidCZeufyN0",
  authDomain: "mono-todo.firebaseapp.com",
  projectId: "mono-todo",
  storageBucket: "mono-todo.appspot.com",
  messagingSenderId: "1056835998572",
  appId: "1:1056835998572:web:87e09cd4319b2c6ea55949",
  measurementId: "G-FH86N6M6SY",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const signOut = () => auth.signOut();

export default function GoogleSignOut() {
  return (
    <>
      <IconButton
        aria-label="Sign out"
        icon={<GoSignOut />}
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        // colorScheme="teal"
        onClick={() => signOut()}
        // justifyContent="center"
        // alignContent="center"
        paddingLeft={1}
        paddingTop={0}
      ></IconButton>
    </>
  );
}

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "@chakra-ui/react";
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
      <Button colorScheme="teal" onClick={() => signOut()} justifyContent='center' alignContent='center' paddingRight={3} paddingTop={1}>
        <GoSignOut />
      </Button>
    </>
  );
}

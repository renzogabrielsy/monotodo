import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/functions";
import { FaGoogle} from "react-icons/fa";

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
export const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)

export default function GoogleSignIn() {
  return (
    <>
      <Button colorScheme='teal' leftIcon={<FaGoogle />} onClick={() => signInWithPopup(auth, provider)}>
  
        Login
      </Button>
    </>
  );
}

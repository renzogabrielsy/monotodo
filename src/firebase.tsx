import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/functions";

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

export const auth = getAuth();
export const provider = new GoogleAuthProvider()
export const db = getFirestore();
// export const functons = firebase.functions();

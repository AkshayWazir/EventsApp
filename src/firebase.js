import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCz3xKLPc25lMP_d7To29S7rBHrFdw68Bg",
  authDomain: "hutest-dev.firebaseapp.com",
  projectId: "hutest-dev",
  storageBucket: "hutest-dev.appspot.com",
  messagingSenderId: "962193963474",
  appId: "1:962193963474:web:0acaed1880fd480384f00b",
});

export const auth = app.auth();
export const db = app.firestore();
export default app;

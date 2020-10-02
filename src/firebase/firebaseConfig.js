import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBND5g7vAy3CuZm2qmw5cQYCusRDZjJt6k",
  authDomain: "autho-ff98f.firebaseapp.com",
  databaseURL: "https://autho-ff98f.firebaseio.com",
  projectId: "autho-ff98f",
  storageBucket: "autho-ff98f.appspot.com",
  messagingSenderId: "30674595755",
  appId: "1:30674595755:web:08f494b51873f3e297ecee",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();


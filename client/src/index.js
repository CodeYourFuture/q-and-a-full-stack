import firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCnn6mfzVroh7VQcln9atjfaa8nIEZUlQ",
  authDomain: "q-and-a-342c1.firebaseapp.com",
  databaseURL: "https://q-and-a-342c1.firebaseio.com",
  projectId: "q-and-a-342c1",
  storageBucket: "q-and-a-342c1.appspot.com",
  messagingSenderId: "248622209912",
  appId: "1:248622209912:web:fbfcb6ec6e58e198f8c68d",
  measurementId: "G-8JVYMM2GNB",
};

firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

ReactDOM.render(<App />, document.getElementById("root"));

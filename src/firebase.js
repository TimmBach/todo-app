import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAX4TbEZ6qPWoPKP-b9Bkbw2eVZkBohKSM",
  authDomain: "todo-app-bf26a.firebaseapp.com",
  projectId: "todo-app-bf26a",
  storageBucket: "todo-app-bf26a.appspot.com",
  messagingSenderId: "806574869724",
  appId: "1:806574869724:web:36a604886a41f826457819",
});

const db = firebaseApp.firestore();

export default db;

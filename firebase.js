// console.log('andrea');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV1NhfBjw82Gn_OGu0E_mC7mDSmtpzEE0",
  authDomain: "fir-javascript-crud-36156.firebaseapp.com",
  projectId: "fir-javascript-crud-36156",
  storageBucket: "fir-javascript-crud-36156.appspot.com",
  messagingSenderId: "957488288732",
  appId: "1:957488288732:web:ae3d43f372498993a33519",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) => {
  // console.log(title, description);
  addDoc(collection(db, "tasks"), { title, description });
};

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id)=> getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields)=> updateDoc(doc(db, 'tasks', id), newFields)

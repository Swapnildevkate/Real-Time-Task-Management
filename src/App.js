import React from "react";
import { initializeApp } from "firebase/app";
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
import { getAuth } from "firebase/auth";
import Home from "./components/Home";
import Login from './components/Login'
import Signup from "./components/Signup";
import { getDatabase } from 'firebase/database';
import CreateTask from "./components/CreateTask";

const firebaseConfig = {
  apiKey: "AIzaSyAe6Z07PcpJ0IfQ8z1x68bbAVCNUM_LF7s",
  authDomain: "task-management-e6085.firebaseapp.com",
  projectId: "task-management-e6085",
  storageBucket: "task-management-e6085.appspot.com",
  messagingSenderId: "676930857895",
  appId: "1:676930857895:web:785fe9a0382d465b28e482",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
        <Route path="/signup" element={<Signup/>}>
        </Route>
        <Route path="/createtask" element={<CreateTask/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

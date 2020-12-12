import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Home from "./Home/Home";
import Todo from "./Todo/Todo";
import { db, auth } from "../firebase";
import firebase from "firebase/app";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [notify, setNotify] = useState();

  useEffect(() => {
    db.collection(auth.currentUser.uid)
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data().item }))
        );
        setNotify(parseInt(todos.length));
        // console.log("Noti Gang :", notify);
      });
  }, [input, notify]);

  const addItem = (input) => {
    db.collection(auth.currentUser.uid)
      .add({
        item: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch((error) => {
        alert(error.message);
        console.log("Couldn't add item!");
      });
    setInput("");
  };

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <NavBar notify={notify} logout={handleLogout} />
      <Home email={currentUser.email} />
      <Todo todo={input} todos={todos} addItem={addItem} />
    </div>
  );
}

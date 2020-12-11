import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Home from "./Home/Home";
import Todo from "./Todo/Todo";
import { db } from "../firebase";
import firebase from "firebase/app";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const [notify, setNotify] = useState();

  useEffect(() => {
    db.collection("planner")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, item: doc.data().item }))
        );
        console.log("Todos Id ...", todos);
        setNotify(parseInt(todos.length));
      });
  }, [item, notify]);

  const addItem = (item) => {
    db.collection("planner")
      .add({
        item: item,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        alert("Item has been submitted! 👍");
      })
      .catch((error) => {
        alert(error.message);
        console.log("Couldn't add item!");
      });

    setItem("");

    setNotify(notify + 1);
  };

  const removeItem = () => {
    db.collection("planner").doc("id").delete();
    setNotify(todos.length - 1);
  };

  const lineThrough = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
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
      <Todo
        todo={item}
        todos={todos}
        addItem={addItem}
        removeItem={removeItem}
        lineThrough={lineThrough}
      />
    </div>
  );
}

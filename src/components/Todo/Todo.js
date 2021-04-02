import React, { useState, useEffect } from "react";
import TodoForm from "../Todo/TodoForm";
import TodoList from "../Todo/TodoList";
import "./Todo.css";

import { db, auth } from "../../firebase";
import firebase from "firebase/app";


const Todo = () => {
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
      });
  }, [input, notify]);

  // Todo Add Item
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
  ////////////////////////////////////////
  

  return (
    <div id="planner" className="Todo-App-Main">
      <div className="Todo">
        <TodoForm todo={todos} addItem={addItem} />
        <div className="todo-list">
          <TodoList todos={todos} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Todo;

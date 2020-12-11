import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Calendar from "react-calendar";
import Home from "./Home/Home";
import Todo from "./Todo/Todo";
import axios from "axios";
import Planner from "./Planner";
import { db } from "../firebase";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [notify, setNotify] = useState(0);

  useEffect(() => {
    // axios
    //   .get("http://localhost:4000/todos")
    //   .then((res) => {
    //     setTodos(res.data);
    //     setNotify(todos.length);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    db.collection('planner').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          console.log('SnapShot :', doc.data())
        })
    })
  }, [todo, notify]);

  const addItem = (item) => {
    // axios
    //   .post("http://localhost:4000/todos", {
    //     item,
    //     id: Date.now(),
    //     complete: false,
    //   })
    //   .then((res) => {
    //     console.log("res from post", res);
    //     res && setTodo({ ...todos }, res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    db.collection("planner")
      .add({
        item: item,
        complete: false,
        id: Date.now(),
      })
      .then(() => {
        alert("Item has been submitted! 👍");
      })
      .catch((error) => {
        alert(error.message);
        console.log("Couldn't add item!");
      });

    setTodo('');

    const newTodos = [...todos, { item, id: Date.now(), complete: false }];
    setTodos(newTodos);
    setNotify(notify + 1);
  };

  const removeItem = (id) => {
    axios.delete(`http://localhost:4000/todos/${id}`, id);
    setTodos(todos.filter((item) => item.id !== id));
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
        todo={todo}
        todos={todos}
        addItem={addItem}
        removeItem={removeItem}
        lineThrough={lineThrough}
      />
      {/* <Planner /> */}
    </div>
  );
}

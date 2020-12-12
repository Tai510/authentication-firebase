import React, { useState } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, notify, setNotify }) => {
  return todos.map((item) => {
    return <TodoItem {...item} notify={notify} setNotify={setNotify} />;
  });
};

export default TodoList;

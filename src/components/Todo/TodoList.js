import React from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return todos.map((item) => {
    return <TodoItem {...item} />;
  });
};

export default TodoList;

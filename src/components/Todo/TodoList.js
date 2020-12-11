import React, { useState } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";

const TodoList = ({ lineThrough, todos, removeItem, editItem }) => {
  return todos.map(item => {
    return (
      <TodoItem 
        removeItem={removeItem}
        lineThrough={lineThrough}
        editItem={editItem}
        {...item}
      />
    );
  });
};

export default TodoList;

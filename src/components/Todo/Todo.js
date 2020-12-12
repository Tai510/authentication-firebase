import React, { useState, useEffect } from "react";
import TodoForm from "../Todo/TodoForm";
import TodoList from "../Todo/TodoList";
import "./Todo.css";

const Todo = ({ todo, todos, addItem }) => {
  return (
    <div id="planner" className="Todo-App-Main">
      <div className="Todo">
        <TodoForm todo={todo} addItem={addItem} />
        <div className="todo-list">
          <TodoList todos={todos} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Todo;

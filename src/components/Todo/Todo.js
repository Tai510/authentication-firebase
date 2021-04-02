import React, { useState, useEffect } from "react";
import TodoForm from "../Todo/TodoForm";
import TodoList from "../Todo/TodoList";
import "./Todo.css";
const Todo = ({addItem, todos}) => {

  

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

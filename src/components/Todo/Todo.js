import React, { useState, useEffect } from "react";
import TodoForm from "../Todo/TodoForm";
import TodoList from "../Todo/TodoList";
import "./Todo.css";

const Todo = ({ todo, todos, addItem, removeItem, lineThrough }) => {
  return (
    <div className="Todo-App-Main">
      <div className="Todo">
        <TodoForm todo={todo} addItem={addItem} removeItem={removeItem} />
        <div className="todo-list">
          <TodoList
            removeItem={removeItem}
            todos={todos}
            lineThrough={lineThrough}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Todo;

import React, { useState } from "react";
import "./Todo.css";

const TodoForm = ({ todo, addItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="TodoForm">
        <h2>
          THINGS TO DO <i class="fas fa-clipboard-check"></i> <span></span>
        </h2>
        <div className="todo-input">
          <input
            placeholder="New Item..."
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          ></input>
          <div className="todo-Button">
            <button id="add-button" type="submit" value="add item">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;

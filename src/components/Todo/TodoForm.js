import React, { useState } from "react";
import "./Todo.css";

const TodoForm = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <div className="todo-input">
        <input
          placeholder="Add a new task..."
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <button disabled={!item} id="add-button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

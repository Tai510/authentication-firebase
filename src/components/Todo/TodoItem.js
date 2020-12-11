import React from "react";

const TodoItem = ({ complete, item, lineThrough, removeItem }) => {
  return (
    <div className="items">
      <div className={`list ${complete}`} onClick={() => lineThrough()}>
        <p>{item}</p>
      </div>
      <button id="delete-button">
        <i onClick={() => removeItem()} class="fas fa-times"></i>{" "}
      </button>
    </div>
  );
};

export default TodoItem;

import React, { useState } from "react";

const TodoItem = ({ id, complete, item, lineThrough, removeItem }) => {
  return (
    <div className="items">
      <div className={`list ${complete}`} onClick={() => lineThrough(id)}>
        <p>{item}</p>
      </div>
      <button id="delete-button">
        <i onClick={() => removeItem(id)} class="fas fa-times"></i>{" "}
        {/* <i onClick={() => editItem(id)} class="fas fa-pencil-alt"></i> */}
      </button>
    </div>
  );
};

export default TodoItem;

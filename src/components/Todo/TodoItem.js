import React from "react";
import { db } from "../../firebase";

const TodoItem = (props) => {
  return (
    <div className="items">
      <div /* className={`list ${complete}`} */>
        <p>{props.item}</p>
      </div>
      <button
        onClick={(e) => db.collection("planner").doc(props.id).delete()}
        id="delete-button"
      >
        <i class="fas fa-times"></i>{" "}
      </button>
    </div>
  );
};

export default TodoItem;

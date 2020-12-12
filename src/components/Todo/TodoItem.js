import React from "react";
import { db } from "../../firebase";

const TodoItem = (props) => {

  const removeItem = (e) => {
    e.preventDefault()
    db.collection("planner").doc(props.id).delete()
    props.setNotify(props.notify - 1)
  }
  return (
    <div className="items">
      <div /* className={`list ${complete}`} */>
        <p>{props.item}</p>
      </div>
      <button
        onClick={removeItem}
        id="delete-button"
      >
        <i class="fas fa-times"></i>{" "}
      </button>
    </div>
  );
};

export default TodoItem;

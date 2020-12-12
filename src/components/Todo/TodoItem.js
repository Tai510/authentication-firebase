import React from "react";
import { db, auth } from "../../firebase";

const TodoItem = (props) => {
  const removeItem = (e) => {
    e.preventDefault();
    db.collection(auth.currentUser.uid).doc(props.id).delete();
  };
  return (
    <div className="items">
      <div /* className={`list ${complete}`} */>
        <p>{props.item}</p>
      </div>
      <button onClick={removeItem} id="delete-button">
        <i class="fas fa-times"></i>{" "}
      </button>
    </div>
  );
};

export default TodoItem;

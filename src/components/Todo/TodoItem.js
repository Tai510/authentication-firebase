import React from "react";
import { db, auth } from "../../firebase";

const TodoItem = (props) => {
  const removeItem = (e) => {
    e.preventDefault();
    db.collection(auth.currentUser.uid).doc(props.id).delete();
  };

  return (
    <div className="items">
      <p>{props.item}</p>

      <button onClick={removeItem} id="delete-button">
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default TodoItem;
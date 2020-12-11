import React, { useState } from "react";
import { db } from "../firebase";

const Planner = () => {
  const [item, setItem] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setItem({ [e.target.name]: e.target.value });
    console.log("Input", item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("planner")
      .add({
        item: item,
        complete: false,
        id: Date.now(),
      })
      .then(() => {
        alert("Item has been submitted! 👍");
      })
      .catch((error) => {
        alert(error.message);
        console.log("Couldn't add item!");
      });

    setItem('');
  };

  return (
    <div className="Planner-Main">
      <form className="form-div" onSubmit={handleSubmit}>
        <input placeholder="add item..." name="item" onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Planner;
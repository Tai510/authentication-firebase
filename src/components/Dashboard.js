import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Home from "./Home/Home";
import Todo from "./Todo/Todo";
// import { db, auth } from "../firebase";
// import firebase from "firebase/app";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
 
  // LogOut Function
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  ////////////////////////////////////////////

  return (
    <div>
      <NavBar logout={handleLogout} />
      <Home email={currentUser.email} />
      {/* <Todo /> */}
    </div>
  );
}

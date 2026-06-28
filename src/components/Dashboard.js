import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Home from "./Home/Home";
import "./Auth.css";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div>
      <Home email={currentUser.email} />
    </div>
  );
}
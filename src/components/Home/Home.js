import React, { useState, useEffect } from "react";
import MyCalendar from "../Calendar/Calendar";
import "./HomeV2.css";
import Clock from "../Clock/Clock";
import { IoIosRestaurant } from "react-icons/io";
import { FaAmazon } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import Weather from "../Weather/Weather";
import RandQuote from "../RandQuote/RandQuote";
import Card from "../Home/Card";
import { db, auth } from "../../firebase";

const Home = ({ email }) => {
  const [greeting, setGreeting] = useState("Welcome");
  const [notify, setNotify] = useState(0);

  const updateGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 18) {
      setGreeting("Good Evening ! 😄");
    } else if (hour >= 12) {
      setGreeting("Good Afternoon ! 😄");
    } else {
      setGreeting("Good Morning ! 😄");
    }
  };

  useEffect(() => {
    updateGreeting();

    const greetingInterval = setInterval(() => {
      updateGreeting();
    }, 60000);

    const unsubscribe = db
      .collection(auth.currentUser.uid)
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setNotify(snapshot.docs.length);
      });

    return () => {
      clearInterval(greetingInterval);
      unsubscribe();
    };
  }, []);

  return (
  <div className="Home">
    <header className="dashboard-header">
      <div>
        <h1>{greeting}</h1>
        <p>Welcome back to your Sonoma dashboard</p>
      </div>

      <div className="dashboard-time">
        <Clock />
      </div>
    </header>
      <div className="left-section-home">
        <MyCalendar greeting={greeting} />
        <Card notify={notify} />
      </div>

      <div className="Greeting">
        <RandQuote />
      </div>

      <div className="right-section-home">
        <div className="first-row-home">
          <Weather />
        </div>

        <div className="social-media">
          {/* keep your shortcut links here */}
        </div>
      </div>
    </div>
  );
};

export default Home;

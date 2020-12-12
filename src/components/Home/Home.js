import React, { useState, useEffect } from "react";
import MyCalendar from "../Calendar/Calendar";
import "./Home.css";
import { IoIosRestaurant } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { RiNetflixFill } from "react-icons/ri";
import { GiHotMeal } from "react-icons/gi";
import { FaAmazon } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import Weather from "../Weather/Weather";
import News from "../News/News";
import { Link } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";

const Home = ({ email }) => {
  // Date
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());
  const [greeting, setGreeting] = useState("Welcome");
  const [time, setTime] = useState("4:50 pm");
  const [event, setEvent] = useState(new Date());
  const [user, setUser] = useState("Tashi");

  function greetUser() {
    if (hours >= 18) {
      setGreeting("Good evening");
    } else if (hours >= 12) {
      setGreeting("Good afternoon");
    } else if (hours >= 0) {
      setGreeting("Good morning");
    }
  }

  useEffect(() => {
    greetUser();
  }, [greetUser, event]);

  return (
    <div className="Home">
      <div className="left-section-home">
        <div className="profile-div">
          <div className="profile-info">
            <label>Account Detail$</label>
            <p>Logged in as {email}</p>
            {/* <Link
              id="update-button"
              to="/update-profile"
              className="btn btn-primary w-100 mt-3"
            >
              Update Profile
            </Link> */}
          </div>
        </div>
        <MyCalendar user={user} greeting={greeting} />
      </div>

      <div className="Greeting">
        <News />
      </div>

      <div className="right-section-home">
        <div className="first-row-home">
          <Weather />
        </div>

        <div className="second-row-home">
          <a
            style={{ display: "table-cell" }}
            target="_blank"
            href="https://www.google.com/search?q=food+near+me&source=lmns&bih=744&biw=1440&hl=en&sa=X&ved=2ahUKEwiTtInUh9jsAhX4ATQIHW9WCxAQ_AUoAHoECAEQAA"
          >
            <div className="food-home">
              <IoIosRestaurant />
            </div>
          </a>
          <a
            style={{ display: "table-cell" }}
            target="_blank"
            href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjLuuTUh9jsAhWlHzQIHbLEACMQPAgI"
          >
            <div className="mail-home">
              <FcGoogle />
            </div>
          </a>
        </div>

        <div className="third-row-home">
          <div className="social-boxes">
            <div className="social-1">
              <a
                style={{ display: "table-cell" }}
                target="_blank"
                id="Facebook"
                href="https://www.facebook.com/"
              >
                <div className="Facebook">
                  <ImFacebook />
                </div>
              </a>
              <a
                style={{ display: "table-cell" }}
                target="_blank"
                id="Amazon"
                href="https://www.amazon.com/"
              >
                <div className="Amazon">
                  <FaAmazon />
                </div>
              </a>
            </div>

            <div className="social-2">
              <a
                style={{ display: "table-cell" }}
                target="_blank"
                id="Netflix"
                href="https://www.netflix.com/"
              >
                <div className="Netflix">
                  <RiNetflixFill />
                </div>
              </a>
              <a
                style={{ display: "table-cell" }}
                target="_blank"
                id="Youtube"
                href="https://www.youtube.com/"
              >
                <div className="Youtube">
                  <FaYoutube />
                </div>
              </a>
            </div>
          </div>

          <div className="stocks">
            <a
              style={{ display: "table-cell" }}
              target="_blank"
              id="Stocks"
              href="https://www.marketwatch.com/investing/stock/live"
            >
              <div className="Stocks">
                <AiOutlineStock />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

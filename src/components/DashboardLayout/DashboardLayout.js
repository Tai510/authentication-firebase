import React, { useEffect, useState } from "react";
import "./DashboardLayout.css";
import Weather from "../Weather/Weather";
import Todo from "../Todo/Todo";
import MyCalendar from "../Calendar/Calendar";
import News from "../News/News";
import RandQuote from "../RandQuote/RandQuote";

function DashboardLayout() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const hour = new Date().getHours();

  let greeting = "Good Evening";
  let icon = "🌙";

  if (hour < 12) {
    greeting = "Good Morning";
    icon = "☀️";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
    icon = "☀️";
  }

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clockTimer);
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-shell">
        <header className="dashboard-header">
          <div className="dashboard-hero">
            <div className={`welcome-intro ${showWelcome ? "show" : "hide"}`}>
              <p>Welcome back,</p>
              <h1>Tai</h1>
            </div>

            <div className={`weather-intro ${showWelcome ? "hide" : "show"}`}>
              <div className="weather-main">
                <span className="weather-icon">{icon}</span>
                <span className="weather-temp">80°</span>
              </div>

              <p className="weather-condition">{greeting}</p>
              <p className="weather-location">📍 Sonoma, California</p>
              <p className="weather-time">
                Currently{" "}
                {currentTime.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </header>

        <main className="desk-room">
          <section className="dashboard-card weather-zone large-card">
            <div className="widget-header">
              <span>🌤️</span>
              <h2>Weather</h2>
            </div>
            <Weather />
          </section>

          <section className="dashboard-card calendar-zone">
            <div className="widget-header">
              <span>📅</span>
              <h2>Calendar</h2>
            </div>
            <MyCalendar />
          </section>

          <section className="dashboard-card task-zone">
            <div className="widget-header">
              <span>✅</span>
              <h2>Tasks</h2>
            </div>
            <Todo />
          </section>
          <section className="dashboard-card wide-card">
            <div className="widget-header">
              <span>💬</span>
              <h2>Daily Inspiration</h2>
            </div>

            <RandQuote />
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

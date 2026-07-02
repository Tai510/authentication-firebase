import React, { useEffect, useState } from "react";
import "./DashboardLayout.css";
import Weather from "../Weather/Weather";

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

        <main className="dashboard-grid">
          <section className="dashboard-card large-card">
            <Weather />
          </section>
          <section className="dashboard-card">Calendar goes here</section>
          <section className="dashboard-card">Todo goes here</section>
          <section className="dashboard-card wide-card">
            Quote / News goes here
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

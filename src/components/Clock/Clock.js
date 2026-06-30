import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div className="clock-box">
      <h3>
        {time.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        })}
      </h3>
    </div>
  );
};

export default Clock;
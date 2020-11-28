import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
const MyCalendar = ({ greeting, user }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className="calendar-box">
      <div className="greeting-text">
        {greeting} {user}
      </div>
      <div className="Calendar">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default MyCalendar;

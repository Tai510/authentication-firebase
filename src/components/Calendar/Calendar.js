import React, { useState , useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { db, auth } from "../../firebase";
import NotesPanel from "../NotesPanel/NotesPanel";

const MyCalendar = ({ greeting }) => {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [noteText, setNoteText] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
  if (!auth.currentUser) return;

  db.collection(auth.currentUser.uid)
    .doc("calendarNotes")
    .get()
    .then((doc) => {
      if (doc.exists) {
        setNotes(doc.data());
      }
    });
}, []);
  

  const getDateKey = (selectedDate) => {
    return selectedDate.toISOString().split("T")[0];
  };

  const onChange = (selectedDate) => {
  setDate(selectedDate);

  const dateKey = selectedDate.toISOString().split("T")[0];
  setNoteText(notes[dateKey] || "");
};

  const saveNote = () => {
  if (!auth.currentUser) return;

  const dateKey = getDateKey(date);

  setNotes({
    ...notes,
    [dateKey]: noteText,
  });

  db.collection(auth.currentUser.uid)
    .doc("calendarNotes")
    .set(
      {
        [dateKey]: noteText,
      },
      { merge: true }
    );

  setSavedMessage("Note saved ✅");

  setTimeout(() => {
    setSavedMessage("");
  }, 2000);
};

const deleteNote = () => {
  if (!auth.currentUser) return;

  const dateKey = getDateKey(date);

  const updatedNotes = { ...notes };
  delete updatedNotes[dateKey];

  setNotes(updatedNotes);
  setNoteText("");

  db.collection(auth.currentUser.uid)
    .doc("calendarNotes")
    .set(updatedNotes);

  setSavedMessage("Note deleted 🗑️");

  setTimeout(() => {
    setSavedMessage("");
  }, 2000);
};

  return (
    <div className="calendar-box">
      <div className="greeting-text">{greeting}</div>

      <div className="Calendar">
        <Calendar
  onChange={onChange}
  value={date}
  tileContent={({ date, view }) => {
    if (view !== "month") return null;

    const dateKey = getDateKey(date);

    return notes[dateKey] ? <div className="note-dot"></div> : null;
  }}
/>
      </div>

      <div className="selected-date">
        <p>Selected Date:</p>
        <h4>
          {date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h4>
      </div>

      <NotesPanel
  noteText={noteText}
  setNoteText={setNoteText}
  saveNote={saveNote}
  deleteNote={deleteNote}
  savedMessage={savedMessage}
/>
    </div>
  );
};

export default MyCalendar;
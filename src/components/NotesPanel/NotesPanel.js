import React from "react";
import "./NotesPanel.css";

const NotesPanel = ({
  noteText,
  setNoteText,
  saveNote,
  deleteNote,
  savedMessage,
}) => {
  return (
    <div className="calendar-notes">
      <textarea
        placeholder="Write a note for this day..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />

      <button onClick={saveNote}>Save Note</button>

      {noteText && <button onClick={deleteNote}>Delete Note</button>}

      {savedMessage && <p className="saved-message">{savedMessage}</p>}
    </div>
  );
};

export default NotesPanel;
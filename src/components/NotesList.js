import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const notesList = notes.map((note) => (
    <Note
      id={note.id}
      text={note.text}
      date={note.date}
      handleDeleteNote={handleDeleteNote}
    />
  ));

  return (
    <div className='note-container'>
      {notesList}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;

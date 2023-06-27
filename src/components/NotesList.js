import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = (props) => {
  const notes = props.notes.map((note) => (
    <Note id={note.id} text={note.text} date={note.date} />
  ));

  return (
    <div className='note-container'>
      {notes}
      <AddNote handleAddNote={props.handleAddNote} />
    </div>
  );
};

export default NotesList;

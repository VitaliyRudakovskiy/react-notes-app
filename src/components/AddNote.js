import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className='note new-note'>
      <textarea
        rows={8}
        cols={10}
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleChange}
      />
      <div className='note-footer'>
        <span>200 symbols remaining</span>
        <button className='save-note' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;

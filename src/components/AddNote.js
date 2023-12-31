import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charactersLimit = 200;

  const handleChange = (event) => {
    if (charactersLimit - event.target.value.length >= 0)
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
        <span>{charactersLimit - noteText.length} symbols remaining</span>
        <button className='save-note' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;

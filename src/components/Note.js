import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = (props) => {
  return (
    <div className='note'>
      <span>{props.text}</span>
      <div className='note-footer'>
        <span>{props.date}</span>
        <MdDeleteForever className='delete-icon' size='1.5rem' />
      </div>
    </div>
  );
};

export default Note;

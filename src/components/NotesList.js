import React from "react";
import NoteItem from "./NoteItem";
import "./NotesList.css";

function NotesList(props) {
  return (
    <ul>
      {props.notes.map((note) => (
        <NoteItem
          key={note.dateCreated}
          title={note.title}
          note={note.note}
          dateCreated={note.dateCreated}
        />
      ))}
    </ul>
  );
}

export default NotesList;

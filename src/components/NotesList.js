import React from "react";
import NoteItem from "./NoteItem";
import "./NotesList.css";

function NotesList(props) {
  return (
    <div className="listContainer">
      <ul>
        {props.notes.map((note) => (
          <NoteItem
            key={note.dateCreated}
            title={note.title}
            note={note.note}
            dateCreated={note.dateCreated}
            dateReadable={note.dateReadable}
            onDeleteNote={props.onDeleteNote}
          />
        ))}
      </ul>
    </div>
  );
}

export default NotesList;

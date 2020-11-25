import "./NoteItem.css";
import React from "react";

class NoteItem extends React.Component {
  onDelete(event) {
    this.props.onDeleteNote(event.target.id);
  }

  render() {
    return (
      <li>
        <button
          id={this.props.dateCreated}
          onClick={(event) => this.onDelete(event)}
        >
          X
        </button>
        <div className="title">{this.props.title}</div>
        <div className="date">{this.props.dateReadable}</div>
        <div className="note">{this.props.note}</div>
      </li>
    );
  }
}

export default NoteItem;

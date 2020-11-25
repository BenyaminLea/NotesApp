import React from "react";
import "./AddNoteForm.css";

class AddNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      title: "",
    };
  }

  handleNoteChange(event) {
    this.setState({ note: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onKeyUp(event) {
    let numberOfLineBreaks = (event.target.value.match(/\n/g) || []).length;
    let newHeight = 20 + (numberOfLineBreaks - 1) * 20 + 12 + 2;
    event.target.style.height = newHeight.toString() + "px";
  }

  handleSubmit(event) {
    event.preventDefault();
    let date = new Date().toString();
    date = date.slice(4, 10) + date.slice(15, 21);
    const newNote = {
      note: this.state.note,
      title: this.state.title,
      dateCreated: Date.now(),
      dateReadable: date,
    };
    this.props.onAddNote(newNote);
    this.setState({ note: "", title: "" });
  }

  render() {
    return (
      <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
        <h1> NotesApp </h1>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="A title for your note?"
            value={this.state.title}
            onChange={(event) => this.handleTitleChange(event)}
          />
        </div>
        <div>
          <textarea
            type="text"
            name="note"
            id="note"
            required
            placeholder="Your note ..."
            value={this.state.note}
            onChange={(event) => this.handleNoteChange(event)}
            onKeyUp={(event) => this.onKeyUp(event)}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}

export default AddNoteForm;

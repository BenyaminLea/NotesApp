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

  handleSubmit(event) {
    event.preventDefault();
    const newNote = {
      note: this.state.note,
      title: this.state.title,
      dateCreated: Date.now(),
    };
    this.props.onAddNote(newNote);
    this.setState({ note: "", title: "" });
  }

  render() {
    return (
      <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={(event) => this.handleTitleChange(event)}
          />
        </div>
        <div>
          <label htmlFor="note">Note</label>
          <textarea
            type="text"
            name="note"
            id="note"
            required
            value={this.state.note}
            onChange={(event) => this.handleNoteChange(event)}
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

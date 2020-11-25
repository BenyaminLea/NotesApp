import React from "react";
import "./App.css";
import AddNoteForm from "./components/AddNoteForm";
import NotesList from "./components/NotesList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  handleOnAddNote(newNote) {
    this.setState((state) => {
      return { notes: [newNote, ...state.notes] };
    });
  }

  handleOnDeleteNote(oldNote) {
    if (window.confirm("Are you sure you want to delete this note?")) {
      const updatedList = this.state.notes.filter(
        (note) => note.dateCreated !== Number(oldNote)
      );
      this.setState({ notes: updatedList });
    }
  }

  render() {
    return (
      <div className="main">
        <AddNoteForm onAddNote={(newNote) => this.handleOnAddNote(newNote)} />
        <NotesList
          notes={this.state.notes}
          onDeleteNote={(oldNote) => this.handleOnDeleteNote(oldNote)}
        />
      </div>
    );
  }
}

export default App;

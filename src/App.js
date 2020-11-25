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

  render() {
    return (
      <div className="main">
        <AddNoteForm onAddNote={(newNote) => this.handleOnAddNote(newNote)} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;

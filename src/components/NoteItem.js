import "./NoteItem.css";
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      title: this.props.title,
      note: this.props.note,
      dateReadable: this.props.dateReadable,
      dateUpdated: "",
      updated: false,
    };
  }
  onDelete(event) {
    this.props.onDeleteNote(event.target.id);
  }
  onOpenModal() {
    this.setState({ isOpen: true });
  }

  onCloseModal() {
    this.setState({ isOpen: false });
  }

  handleNoteChange(event) {
    let date = new Date().toString();
    date = date.slice(4, 10) + date.slice(15, 21);
    this.setState({
      note: event.target.value,
      dateUpdated: date,
      updated: true,
    });
  }

  handleTitleChange(event) {
    let date = new Date().toString();
    date = date.slice(4, 10) + date.slice(15, 21);
    this.setState({
      title: event.target.value,
      dateUpdated: date,
      updated: true,
    });
  }

  render() {
    return (
      <div>
        <li onClick={() => this.onOpenModal()}>
          <button
            id={this.props.dateCreated}
            onClick={(event) => this.onDelete(event)}
          >
            Delete
          </button>
          <div className="title">{this.state.title}</div>
          <div className="note">{this.state.note}</div>
          <div className="date">Created : {this.state.dateReadable}</div>
          <div className={this.state.updated ? "date" : "hidden"}>
            Updated : {this.state.dateUpdated}
          </div>
        </li>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={() => this.onCloseModal()}
          style={{
            overlay: { backgroundColor: "grey" },
            content: {
              width: "300px",
              height: "300px",
              top: "25%",
              left: "25%",
              right: "auto",
              bottom: "auto",
            },
          }}
        >
          <button onClick={() => this.onCloseModal()}>Close</button>
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
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default NoteItem;

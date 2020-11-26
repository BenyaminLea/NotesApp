import "./NoteItem.css";
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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
          <div className="title">{this.props.title}</div>
          <div className="date">{this.props.dateReadable}</div>
          <div className="note">{this.props.note}</div>
        </li>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={() => this.onCloseModal()}
          style={{
            overlay: { backgroundColor: "grey" },
            content: {
              width: "100px",
              height: "100px",
              top: "25%",
              left: "25%",
              right: "auto",
              bottom: "auto",
            },
          }}
        >
          <button onClick={() => this.onCloseModal()}>Close</button>
          <div className="title">{this.props.title}</div>
          <div className="date">{this.props.dateReadable}</div>
          <div className="note">{this.props.note}</div>
        </Modal>
      </div>
    );
  }
}

export default NoteItem;

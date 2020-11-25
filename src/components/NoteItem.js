import "./NoteItem.css";
function NoteItem(props) {
  return (
    <li>
      <button>X</button>
      <div className="title">{props.title}</div>
      <div className="date">{props.dateCreated}</div>
      <div className="note">{props.note}</div>
    </li>
  );
}

export default NoteItem;

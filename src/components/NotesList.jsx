import React from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function NotesList({ sortAscending }) {
  const [notes, setNotes] = React.useState([]);

  function addInput(userInput) {
    setNotes((prevNotes) => [...prevNotes, userInput]);
  }

  function handleDelete(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  }

  return (
    <div>
      <CreateArea addUserInput={addInput} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          createdAt={noteItem.createdAt}
          delete={handleDelete}
        />
      ))}
    </div>
  );
}

export default NotesList;

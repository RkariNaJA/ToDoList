import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [isSorted, setIsSorted] = useState(false); // Manage sorting state

  function addInput(userInput) {
    setNotes((prevNotes) => [...prevNotes, userInput]);
  }

  function handleDelete(id) {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  }

  function handleSort() {
    setIsSorted(!isSorted);
    setNotes((prevNotes) => {
      const sortedNotes = [...prevNotes].sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase())
          return isSorted ? -1 : 1;
        if (a.title.toLowerCase() > b.title.toLowerCase())
          return isSorted ? 1 : -1;
        return 0;
      });
      return sortedNotes;
    });
  }

  return (
    <div>
      <CreateArea
        addUserInput={addInput}
        handleSort={handleSort}
        isSorted={isSorted}
      />
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

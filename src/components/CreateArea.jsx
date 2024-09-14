import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea({ addUserInput }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    createdAt: new Date().toLocaleString(),
  });
  const [isExpand, setIsExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleClick(event) {
    event.preventDefault();
    addUserInput(note);
    setNote({
      title: "",
      content: "",
      createdAt: new Date().toLocaleString(),
    });
    setIsExpand(false);
  }
  function toggleExpand() {
    setIsExpand(true);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onClick={toggleExpand}
          onChange={handleChange}
        />
        {isExpand && (
          <textarea
            name="content"
            placeholder="Take a note..."
            value={note.content}
            onChange={handleChange}
          />
        )}
        <button onClick={handleClick}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

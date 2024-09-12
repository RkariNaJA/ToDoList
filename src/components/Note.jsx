import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import HistoryIcon from "@mui/icons-material/History";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Note({ id, title, content, createdAt, delete: handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentContent, setCurrentContent] = useState(content);
  const [history, setHistory] = useState([]);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [isDateVisible, setIsDateVisible] = useState(false);

  function handleEdit() {
    if (isEditing) {
      setHistory([
        ...history,
        { title: currentTitle, content: currentContent },
      ]);
    }
    setIsEditing(!isEditing);
  }

  function handleTitleChange(e) {
    setCurrentTitle(e.target.value);
  }

  function handleContentChange(e) {
    setCurrentContent(e.target.value);
  }

  function toggleHistoryVisibility() {
    setIsHistoryVisible(!isHistoryVisible);
  }

  function toggleDateVisibility() {
    setIsDateVisible(!isDateVisible);
  }

  return (
    <div className="note">
      <div>
        {isEditing ? (
          <>
            <input
              type="text"
              value={currentTitle}
              onChange={handleTitleChange}
              placeholder="Title"
            />

            <textarea
              value={currentContent}
              onChange={handleContentChange}
              placeholder="Content"
            />
          </>
        ) : (
          <>
            <h1>{currentTitle}</h1>
            <p>{currentContent}</p>
            {isDateVisible && (
              <p className="note-date">
                <AccessTimeIcon /> {createdAt}
              </p>
            )}
          </>
        )}
      </div>
      <button onClick={() => handleDelete(id)}>
        <DeleteIcon />
      </button>
      <button onClick={handleEdit}>
        {isEditing ? <SaveAltIcon /> : <EditIcon />}
      </button>
      <button onClick={toggleHistoryVisibility}>
        <HistoryIcon />
      </button>
      <button onClick={toggleDateVisibility}>
        {isDateVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </button>
      {isHistoryVisible && (
        <div className="history">
          <h2>History</h2>
          {history.length > 0 ? (
            <ul>
              {history.map((entry, index) => (
                <li key={index}>
                  <h3>Change {index + 1}</h3>
                  <h4>Title:</h4>
                  <p>{entry.title}</p>
                  <h4>Content:</h4>
                  <p>{entry.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No history available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Note;

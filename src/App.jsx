import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [boxes, setBoxes] = useState([]);

  // Add a new box
  const handleAddBox = () => {
    setBoxes([...boxes, { id: Date.now(), title: "", note: "" }]);
  };

  // Handle title change
  const handleTitleChange = (id, newTitle) => {
    setBoxes(
      boxes.map((box) =>
        box.id === id ? { ...box, title: newTitle } : box
      )
    );
  };

  // Handle note change
  const handleNoteChange = (id, newNote) => {
    setBoxes(
      boxes.map((box) =>
        box.id === id ? { ...box, note: newNote } : box
      )
    );
  };

  // Delete a box
  const handleDeleteBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="App">
      <h1>Dynamic Notes</h1>
      <button onClick={handleAddBox} className="add-btn">
        Add Note Box
      </button>
      <div className="box-container">
        {boxes.map((box) => (
          <div key={box.id} className="box">
            <label>Title:</label>
            <input
              type="text"
              value={box.title}
              onChange={(e) => handleTitleChange(box.id, e.target.value)}
              placeholder="Enter title"
            />
            <label>Note:</label>
            <textarea
              value={box.note}
              onChange={(e) => handleNoteChange(box.id, e.target.value)}
              placeholder="Write your note here..."
            />
            <button
              onClick={() => handleDeleteBox(box.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";


const TODO = () => {
  const [records, setRecords] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddRecord = () => {
    if (input.trim()) {
      if (editId !== null) {
        setRecords(
          records.map((record, index) =>
            index === editId ? input : record
          )
        );
        setEditId(null);
      } else {
        setRecords([...records, input]);
      }
      setInput("");
    }
  };

  const handleDeleteRecord = (index) => {
    setRecords(records.filter((_, i) => i !== index));
  };

  const handleEditRecord = (index) => {
    setInput(records[index]);
    setEditId(index);
  };

  return (
    <div className="todo-container">
      <h1>Record Manager</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter record"
      />
      <button
        className="add-button"
        onClick={handleAddRecord}
      >
        {editId !== null ? "Update Record" : "Add Record"}
      </button>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record}
            <div>
              <button
                className="edit-button"
                onClick={() => handleEditRecord(index)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeleteRecord(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TODO;

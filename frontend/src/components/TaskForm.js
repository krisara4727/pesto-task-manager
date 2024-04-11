import React, { useState } from "react";
import { addTask } from "../services/taskservices";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title is required");
      return;
    }
    const task = { title, description, status };
    await addTask(task);
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create New Task</h2>
        <div>
          <label className="title-label">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;

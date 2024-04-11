import React from "react";
import { deleteTask, updateTask } from "../services/taskservices";
import {
  deleteStatus,
  doneStatus,
  progressStatus,
  toDoStatus,
} from "../common/constants";

function TaskList({ tasks, fetchTasks }) {
  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleStatusChange = async (id, status) => {
    await updateTask(id, status, fetchTasks);
  };

  return (
    <div className="task-list-container">
      <h2 className="text-center">Task List</h2>
      <ul>
        {tasks?.map((task) => (
          <li key={task._id} className="task">
            <div className="task-header">
              <div className="task-title">{task.title}</div>
              <div
                className="task-actions"
                onClick={(e) => {
                  if (e.target.innerText === deleteStatus)
                    handleDelete(e.target.id);
                  else handleStatusChange(e.target.id, e.target.innerText);
                }}
              >
                <button
                  id={task._id}
                  //   onClick={() => handleStatusChange(task._id, "To Do")}
                  className="light-blue white"
                >
                  {toDoStatus}
                </button>
                <button
                  id={task._id}
                  //   onClick={() => handleStatusChange(task._id, "In Progress")}
                  className="light-purple white"
                >
                  {progressStatus}
                </button>
                <button
                  id={task._id}
                  //   onClick={() => handleStatusChange(task._id, "Done")}
                  className="light-green white"
                >
                  {doneStatus}
                </button>
                <button
                  id={task._id}
                  //   onClick={(e) => handleDelete(task._id)}
                  className="light-red white"
                >
                  {deleteStatus}
                </button>
              </div>
            </div>
            <p>{task.description}</p>
            <p>
              Status:{" "}
              <span
                style={{
                  color:
                    task.status === "Done"
                      ? "green"
                      : task.status === "In Progress"
                      ? "purple"
                      : "blue",
                }}
              >
                {task.status}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

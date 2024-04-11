import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import { getAllTasks } from "./services/taskservices";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getAllTasks();
    setTasks(data);
    setFilteredTasks(data);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    if (selectedFilter === "All") {
      setFilteredTasks(tasks);
    } else {
      const filtered = tasks.filter((task) => task.status === selectedFilter);
      setFilteredTasks(filtered);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Task Management Application</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;

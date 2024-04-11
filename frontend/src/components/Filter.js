import React from "react";

function Filter({ filter, onFilterChange }) {
  return (
    <div className="filter-container">
      <h2>Filter</h2>
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

export default Filter;

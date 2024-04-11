const express = require("express");
const {
  getAllTasks,
  addNewTask,
  deleteTask,
  updateTask,
} = require("../controller/taskController");
const route = express.Router();

route.get("/tasks", getAllTasks);

route.post("/tasks", addNewTask);

route.put("/tasks/:id", updateTask);

route.delete("/tasks/:id", deleteTask);

module.exports = route;

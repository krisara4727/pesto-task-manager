import axios from "axios";

export function getAllTasks() {
  return axios
    .get("http://localhost:5000/api/tasks")
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
}

export function addTask(task) {
  return axios
    .post("http://localhost:5000/api/tasks", task)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
}

export function updateTask(id, status, fetchTasks) {
  return axios
    .put(`http://localhost:5000/api/tasks/${id}`, { status })
    .then((res) => {
      fetchTasks();
      return res.data;
    })
    .catch((err) => console.log(err));
}

export function deleteTask(id) {
  return axios
    .delete(`http://localhost:5000/api/tasks/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

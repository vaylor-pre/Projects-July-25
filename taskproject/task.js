// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter-btn");

// Load tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render tasks based on filter
function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
  });

  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.className = `task ${task.completed ? "completed" : ""}`;
    taskItem.innerHTML = `
      <input
        type="checkbox"
        ${task.completed ? "checked" : ""}
        data-index="${index}"
      >
      <span class="task-text">${task.text}</span>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    taskList.appendChild(taskItem);
  });

  // Update storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a new task
function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    taskInput.value = "";
    renderTasks();
  }
}

// Toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks(document.querySelector(".filter-btn.active").dataset.filter);
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks(document.querySelector(".filter-btn.active").dataset.filter);
}

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

taskList.addEventListener("click", (e) => {
  if (e.target.matches("input[type='checkbox']")) {
    toggleTask(Number(e.target.dataset.index));
  }
  if (e.target.matches(".delete-btn")) {
    deleteTask(Number(e.target.dataset.index));
  }
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderTasks(btn.dataset.filter);
  });
});


renderTasks();

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const taskList = document.getElementById("task-list");
const countSpan = document.getElementById("count");
const clearCompleted = document.getElementById("clear-completed");
const clearAll = document.getElementById("clear-all");

const username = "darshan";
const apiUrl = `http://localhost:8080/users/${username}/todos`;

let tasks = [];

// Load tasks from backend
async function loadTasks() {
  const response = await fetch(apiUrl);
  tasks = await response.json();
  renderTasks();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  const dueDate = dateInput.value;

  if (text === "" || dueDate === "") return;

  const newTask = {
    description: text,
    targetDate: dueDate,
    done: false
  };

  // POST new todo to backend
  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask)
  });

  await loadTasks(); // reload list
  form.reset();
});

async function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", async () => {
      task.done = !task.done;
      await fetch(`${apiUrl}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
      });
      await loadTasks();
    });

    const textSpan = document.createElement("span");
    textSpan.className = "task-text";
    if (task.done) textSpan.classList.add("completed");
    textSpan.textContent = task.description;

    const dateSpan = document.createElement("span");
    dateSpan.className = "task-date";
    dateSpan.textContent = `Due: ${task.targetDate}`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.className = "icon-btn";
    delBtn.addEventListener("click", async () => {
      await fetch(`${apiUrl}/${task.id}`, { method: "DELETE" });
      await loadTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(dateSpan);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });

  countSpan.textContent = `${tasks.length} task${tasks.length !== 1 ? "s" : ""}`;
}

clearCompleted.addEventListener("click", async () => {
  for (const task of tasks.filter(t => t.done)) {
    await fetch(`${apiUrl}/${task.id}`, { method: "DELETE" });
  }
  await loadTasks();
});

clearAll.addEventListener("click", async () => {
  for (const task of tasks) {
    await fetch(`${apiUrl}/${task.id}`, { method: "DELETE" });
  }
  await loadTasks();
});

// load tasks when page opens
loadTasks();

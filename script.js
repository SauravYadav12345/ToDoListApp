const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const taskText = input.value.trim();
  console.log(input.value);

  if (taskText === "") {
    alert("Text cannot be empty!");
    return;
  }
  if (taskText.length < 3) {
    alert("Text must be atleast 3 characters long!");
    return;
  }
  if (taskText.length > 100) {
    alert("text must be less than 100 characters!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button onClick="updateTodo(this)">Update</button>
    <button onClick="deleteTodo(this)">Delete</button>
    `;
  todoList.appendChild(li);
  input.value = "";
}

function deleteTodo(button) {
  const li = button.parentElement;
  todoList.removeChild(li);
}

function updateTodo(button) {
  const li = button.parentElement;
  const taskSpan = li.querySelector("span");
  const newTask = prompt("Update your task:", taskSpan.textContent);

  if (newTask === "") {
    alert("Text cannot be empty!");
    return;
  }
  if (newTask.length < 3) {
    alert("Text must be atleast 3 characters long!");
    return;
  }
  if (newTask.length > 50) {
    alert("text must be less than 50 characters!");
    return;
  }

  if (newTask !== null && newTask.trim() !== "") {
    taskSpan.textContent = newTask.trim();
  } else {
    alert("Task cannot be Empty!");
  }
}

addButton.addEventListener("click", addTodo);

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

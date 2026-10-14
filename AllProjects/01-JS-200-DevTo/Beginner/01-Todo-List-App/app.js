const STORAGE_KEY = "todo-Typing-01";
let todos = [];
let currentFilter = "all";

const inputEl = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const listEl = document.getElementById("list");
const countEl = document.getElementById("count");

console.log("block2 state ", typeof todos, Array.isArray(todos));

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

todos = loadTodos();
console.log("block3 loaded", todos.length);

function addTodo(text) {
  const clean = text.trim();
  if (clean == "") return;
  todos.push({ id: Date.now(), text: clean, done: false });
  saveTodos();
}

function toggleTodo(id) {
  todos = todos.map(function (t) {
    if (t.id === id) return { id: t.id, text: t.text, done: !t.done };
    return t;
  });
  saveTodos();
  render()
}

function deleteTodo(id) {
  todos = todos.filter(function (t) {
    return t.id !== id;
  });
  saveTodos();
  render()
}

function getVisibleTodos(){
    if(currentFilter === "active") return todos.filter(function (t){return !t.done; });
    if(currentFilter === "done") return todos.filter(function (t){return t.done;});
    return todos;
}

function render() {
  listEl.innerHTML = "";
  getVisibleTodos().forEach(function (todo) {
    const li = document.createElement("li");
    if (todo.done) li.className = "done";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", function () {
      toggleTodo(todo.id);
    });
    const span = document.createElement("span");
    span.textContent = todo.text;
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", function () {
      deleteTodo(todo.id);
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    listEl.appendChild(li);
  });
  const left = todos.filter(function(t){return !t.done; }).length;
  countEl.textContent =left +"left /" + todos.length + "total";
}

addBtn.addEventListener("click" ,function(){
    addTodo(inputEl.value);
    inputEl.value = ""
    inputEl.focus();
    render();
}
);  

inputEl.addEventListener("keydown",function(e){
    if(e.key == "Enter"){
        addTodo(inputEl.value);
        inputEl.value = ""
        render();
    }
    });
          document.querySelectorAll("[data-filter]").forEach(function(btn){
        btn.addEventListener("click", function(){
          currentFilter = btn.getAttribute("data-filter");
          render();
        });
      });
    

render();
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const text = taskInput.value.trim();
    if (text === "")return;

    const li = document.createElement ("li")
    const span = document.createElement("span");
    span.textContent = text;
    span.style.cursor ="pointer";
    span.addEventListener("click", function () {
        li.classList.toggle("done")
    });
    
    const deleteBtn =  document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") addTask();
})
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click",function() {

    const task = taskInput.value;

    if(task !== "") {

        const listItem = document.createElement("li")

        listItem.textContent = task;

        taskList.appendChild(listItem);

        taskInput.value = "";
    }

});
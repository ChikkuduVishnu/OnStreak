const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task !== "") {

        const listItem = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.textContent = task;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        completeButton.addEventListener("click", function () {
            taskText.style.textDecoration = "line-through";
        });

        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(taskText);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = "";
    }
});
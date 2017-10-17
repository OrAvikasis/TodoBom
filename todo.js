var todoJs = function () {

    var button = document.getElementById("newMission");

    var taskInput = document.getElementById("taskInput");

    var todoList = document.getElementById("todoList");

    var checkboxTemplate = "<input class='taskCheckbox' type='checkbox'>"

    var deleteButton = "<input class='delete-button' type='button' value='delete!'>"

    var addNewTask = function(){
        var newListItem = document.createElement("li");
        var myLabel = "<label>" + taskInput.value + "</label>";
        
        newListItem.innerHTML = checkboxTemplate + myLabel+ deleteButton;
        taskInput.value = '';
        
        // Another way to add listener to the delete button
        /* var deleteButtonElement = newListItem.childNodes[newListItem.childNodes.length-1];
        deleteButtonElement.addEventListener('click', function(event) {
            event.target.parentElement.remove();
        }); */
        todoList.appendChild(newListItem);
    }

    button.addEventListener("click",addNewTask);

    todoList.addEventListener('click', function(event) {
    if (event.target.className == 'delete-button') event.target.parentElement.remove();
    });

}

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  todoJs();
} else {
  document.addEventListener("DOMContentLoaded", todoJs);
}



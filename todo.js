var todoJs = function () {

    var button = document.getElementById("newMission");

    var taskInput = document.getElementById("taskInput");

    var todoList = document.getElementById("todoList");

    var taskForm = document.getElementById("taskForm");

    var checkboxTemplate = "<input class='taskCheckbox list-item-component' type='checkbox'>"

    var deleteButton = "<i class='fa fa-trash delete-button list-item-component' aria-hidden='true'></i>"

    var addNewTask = function(){
        var newListItem = document.createElement("li");
        var myLabel = "<label class='list-item-component'>" + taskInput.value + "</label>";
        
        newListItem.innerHTML = checkboxTemplate + myLabel + deleteButton;
        taskInput.value = '';
        
        // Another way to add listener to the delete button
        /* var deleteButtonElement = newListItem.childNodes[newListItem.childNodes.length-1];
        deleteButtonElement.addEventListener('click', function(event) {
            event.target.parentElement.remove();
        }); */
        todoList.appendChild(newListItem);
    }

    button.addEventListener("click", addNewTask);
    
    taskForm.addEventListener("keypress", function(e){

        
        if (e.keyCode == 13) {
            e.preventDefault();
        addNewTask();
        }
    });

    todoList.addEventListener('click', function(event) {
    if (event.target.className.indexOf('delete-button') > -1) event.target.parentElement.remove();
    });

}

if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)) {
  todoJs();
} else {
  document.addEventListener("DOMContentLoaded", todoJs);
}



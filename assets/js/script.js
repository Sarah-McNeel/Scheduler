let currentDay = $("#currentDay");
let currentDate = moment().format("MMMM Do YYYY");
let currentHour = moment().format("H");
let tasksToDo = [];
let toDoRow = $(".row");
let taskArea = $(".container");

var moment = moment().format();

//scheduler column time information

function beginScheduler() {
    toDoRow.each(function () {
        var hourRow = $(this);
        var hourRowHr = parseInt(hourRow.attr("data-hour"));

        var toDoObj = {
            hour: hourRowHr,
            text: "",
        }
        tasksToDo.push(toDoObj);
    });
    localStorage.setItem("tasks", JSON.stringify(tasksToDo));
};

currentDay.text(currentDate);

// save the tasks

function saveTask() {
    var tasksToDoHour = $(this).parent().attr("data-hour");
    var taskAdd = (($(this).parent()).children("textarea")).val();
    for (var i = 0; i < tasksToDo.length; i++) {
        if (tasksToDo[i].hour == tasksToDoHour) {
            tasksToDo[i].text = taskAdd;
            taskArea.on("click", "button", saveTask);
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasksToDo));
    getSchedule();
}






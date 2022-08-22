// Business for To Do List
function ToDoList() {
  this.tasks = {};
}

ToDoList.prototype.assignTask = function(task) {
  this.tasks[task.taskObj] = task;
};


// Business for tasks
function Task(taskObj) {
  this.taskObj = taskObj;
}
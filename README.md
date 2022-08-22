Describe: Task();

Test: It should input the tasks.
Code:  let task1 = new Task("Cleaning");
Expected Output: undefined;
  task1();
  Task {. . .}

            
Describe: ToDoList ();

Test: It should input the values of "Task" to "tasks"
Code: let toDoList = new ToDoList();
  toDoList;
Expected Output: ToDoList{task};

Test: It should assign task{} to a value.
Code: ToDoList(); 
  ToDoList.assignTask(task1); 
  toDoList.tasks["Cleaning"]; 
Expected Output: Task {'Cleaning'}
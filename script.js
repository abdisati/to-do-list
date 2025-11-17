//get the input, button and taskList
const input=document.getElementById("task-input");
const addBtn=document.getElementById("add-btn");
const taskList=document.getElementById("task-list");
//get the tasks from local storage, i.e the browser
const tasks=JSON.parse(localStorage.getItem("tasks"))  || [];

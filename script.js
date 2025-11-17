//get the input, button and taskList
const input=document.getElementById("task-input");
const addBtn=document.getElementById("add-btn");
const taskList=document.getElementById("task-list");
//get the tasks from local storage, i.e the browser
const tasks=JSON.parse(localStorage.getItem("tasks"))  || [];
//function to save the local storage
function saveTask(){
    localStorage.setItem("tasks",JSON.stringify(tasks)); //convert it to string, cause the value
                                                        //val type for localStorage is string

}

function renderTasks(){
    taskList.innerHTML=""; //set the inner html to empty string
    //apply forEach function to each tasks
    tasks.forEach((task,index)=>{
        //create a list element
        const li=document.createElement("li");
        //assign a class name 
        li.className=`task ${task.completed?"completed":""}`;
        //create an inner span element and button
        li.innerHTML=`<span onclick=toggle(${index})>${task.text}</span>
        <button class=delete-btn onclick="deleteTask(${index})">Delete</button>
        `;
        //append the created element to the taskList
        taskList.appendChild(li);

    });
}

//function to add the task
function addTask(){
    let text=input.value.trim();
    if(text==""){
        alert("Please Enter The Task");
        return;
    }
    tasks.push({text,complet:false});
    saveTask();
    renderTasks();

    //reset the iput val
    input.value="";
}

function toggle(index){
    tasks[index].completed=!tasks[index].completed;
    saveTask();
    renderTasks();
}
function deleteTask(index){
    tasks.splice(index,1);
    saveTask();
    renderTasks;
}





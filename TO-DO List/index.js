const title=document.getElementById("title");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");

const tasks=localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks"))
:[];
showAllTasks();

function createTask(value, index){
    const div=document.createElement("div");
    div.setAttribute("class","task");

    const innerDiv=document.createElement("div");
    div.append(innerDiv);
    
    const p=document.createElement("p");
    p.innerText=value.title;
    innerDiv.append(p);

    const span=document.createElement("span");
    span.innerText=value.description;
    innerDiv.append(span);


    const btn=document.createElement("button");
    btn.setAttribute("class","deleteBtn");

    btn.innerText="-";
    btn.addEventListener("click",()=>{
        // deleteTask(index)
        removeTasks();
        tasks.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        showAllTasks();
    })

    div.append(btn);
    return div;
}

function showAllTasks(){
    tasks.forEach((value,index)=>{
        container.append(createTask(value, index));
    });
}

function removeTasks(){
    tasks.forEach((value)=>{
        const div=document.querySelector(".task");
        div.remove();
    })
};

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    removeTasks();

    tasks.push({
        title:title.value,
        description:description.value
    })

    title.value = "";
    description.value = "";
    // console.log(tasks);

    // stringify -> object to string
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks();
})
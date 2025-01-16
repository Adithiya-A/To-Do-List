let inputTask = document.getElementById("input-task");
let listContainer = document.getElementById("list-container");
let addTask = document.getElementById("add-task");

addTask.addEventListener("click", () =>{
    if(inputTask.value == ""){
        alert("Please enter a task");
    }
    else{
    let li = document.createElement("li")
    li.innerHTML= inputTask.value
    listContainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    }
    inputTask.value = "";
    save();
})

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
})

function save(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function restore(){
    listContainer.innerHTML =localStorage.getItem("data");
}

restore();
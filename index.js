const button = document.getElementById("add-todo");
button.addEventListener("click", handleClick);

const input = document.getElementById("todo-note");
input.addEventListener("keydown", handleKeyDown);

function handleClick(event) {
    addToDo();
}

function handleKeyDown(event) {
    if (event.code === "Enter") {
        addToDo();
    }
}

function addToDo() {
    const input = document.getElementById("todo-note");
    const list = document.getElementById("todo-list");
    
    if (input.value !== "") {
        const item = document.createElement("li");
        item.addEventListener("click", removeToDo);
        item.textContent = input.value;
        input.value = "";
        list.appendChild(item);
        input.focus();
    } 
}

function removeToDo(event) {
    const list = document.getElementById("todo-list");
    list.removeChild(event.target);
    // event.target.parentNode.removeChild(event.target);
}
const addTodo = document.querySelector("#addTodo");
const addTodoBox = document.querySelector("#addTodoBox");
const addToboBtn = document.querySelector("#addToboBtn");
const todoInput = addTodoBox.querySelector("#todoInput");
const saveForm = document.querySelector("#saveForm")
const myTodoList = document.querySelector("#myTodoList");


const TODO_LIST = "todoList";
const storageItem = JSON.parse(localStorage.getItem(TODO_LIST));
let todoList = !!storageItem?storageItem:[];

function cookiesTodoList(){
    if(storageItem){
        todoInput.classList.remove(HIDDEN_CLASSNAME);
        todoInput.placeholder = "New Todo"
        addTodoBox.querySelector(".empty").classList.add(HIDDEN_CLASSNAME);
        let html = ``
        todoList.forEach(item=>{
            html += `
        <li id=${item.id}>
            <input type="checkbox">
            <label>${item.todo}</label>
            <span id="listDel">✖︎</span>
        </li>`;
        })
        myTodoList.innerHTML = html;
        myTodoList.style.textAlign = "left"
        todoInput.focus();
    }
}
function setTodo(){
    addTodoBox.classList.toggle(HIDDEN_CLASSNAME);
}

function addInput(event){
    event.preventDefault();
    todoInput.classList.remove(HIDDEN_CLASSNAME);
    addToboBtn.classList.add(HIDDEN_CLASSNAME)
    todoInput.focus();
    todoInput.placeholder = "New Todo"
}

function addTodoList(event){
    event.preventDefault();
    const date = new Date();
    const todoItem = {
        id:`${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getMilliseconds()}`,
        todo:todoInput.value
    };
    todoList.push(todoItem);
    localStorage.setItem(TODO_LIST,JSON.stringify(todoList));
    let html = ``
    todoList.forEach(item=>{
        html += `
        <li id=${item.id}>
            <input type="checkbox">
            <label>${item.todo}</label>
            <span id="listDel">✖︎</span>
        </li>`;
    })
    myTodoList.innerHTML = html;
    myTodoList.style.textAlign = "left"
    todoInput.value = "";

}

function todoListDel(event){
    const li = event.target.parentElement;
    console.log("111 ",todoList);
    console.log(li.id)
    todoList = todoList.filter((todo)=>todo.id !== li.id);
    console.log("2222",todoList)
    localStorage.setItem(TODO_LIST,JSON.stringify(todoList));
    li.remove();
}



cookiesTodoList();
saveForm.addEventListener("submit", addTodoList);
addTodo.addEventListener("click", setTodo);
addToboBtn.addEventListener("click", addInput);
myTodoList.addEventListener("click",todoListDel)

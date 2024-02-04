const finTodo=document.querySelector("#finTodo");
const todo = document.querySelector("#todo")
const userTodo = finTodo.querySelector("label");
const deleteLabel = finTodo.querySelector("#delete")

const TODAY_TODO = "todayTodo";
function cookiesTodo(){
    const storageTodo = localStorage.getItem(TODAY_TODO)
    if(storageTodo){
        answerTodo.classList.add(HIDDEN_CLASSNAME);
        finTodo.classList.remove(HIDDEN_CLASSNAME)
        userTodo.innerText = `${storageTodo}`;
    }
}
function getTodayTodo(event){
    event.preventDefault();
    const todayTodo = todo.value;
    localStorage.setItem(TODAY_TODO,todayTodo);
    answerTodo.classList.add(HIDDEN_CLASSNAME);
    finTodo.classList.remove(HIDDEN_CLASSNAME)
    userTodo.innerText = `${todayTodo}`;
}

function deleteTodo(){
    localStorage.removeItem(TODAY_TODO);
    answerTodo.classList.remove(HIDDEN_CLASSNAME);
    finTodo.classList.add(HIDDEN_CLASSNAME);
    todo.value = "";
}

cookiesTodo();
answerTodo.addEventListener("submit",getTodayTodo);
deleteLabel.addEventListener("click",deleteTodo)
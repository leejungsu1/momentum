const greeting = document.querySelector("#greeting");
const clock= document.querySelector("#clock");

function getTime(){
    const date = new Date();
    const hour = (date.getHours().toString()).padStart(2,"0");
    const min=(date.getMinutes().toString()).padStart(2,"0")
    clock.innerText=`${hour}:${min}`;
    greeting.innerText = `Hello, ${localStorage.getItem(USER_NAEM)}.`
}

getTime();
setInterval(getTime,100);
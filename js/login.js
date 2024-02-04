const answerName = document.querySelector("#answerName");
const name = document.querySelector("#name");
const answerEmail = document.querySelector("#answerEmail");
const email = document.querySelector("#email");
const emailLabel= answerEmail.querySelector("label");
const answerPw = document.querySelector("#answerPw");
const pw = document.querySelector("#pw");
const main = document.querySelector("#main");
const answerTodo=document.querySelector("#answerTodo");


const HIDDEN_CLASSNAME = "hidden";
const USER_NAEM="userName";
const USER_EMAIL="userEmail";
const USER_PW="userPw";

function emailValidChk(email){
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if(pattern.test(email) === false)  return false;
    else  return true;

}

function cookiesLogin(){
    if(localStorage.getItem(USER_NAEM)&& localStorage.getItem(USER_EMAIL)&&localStorage.getItem(USER_PW)){
        answerName.classList.add(HIDDEN_CLASSNAME);
        main.classList.remove(HIDDEN_CLASSNAME);
        answerTodo.classList.remove(HIDDEN_CLASSNAME);
    }
}
function getName(event){
    event.preventDefault();
    const userName = name.value;
    console.log(userName);
    localStorage.setItem(USER_NAEM,userName);
    answerName.classList.add(HIDDEN_CLASSNAME);
    answerEmail.classList.remove(HIDDEN_CLASSNAME)
    emailLabel.innerText = `What's your email,${userName}?`
    email.focus();
}

function getEmail(event){
    event.preventDefault();
    const userEmail = email.value;
    if(emailValidChk(userEmail)){
        console.log(userEmail);
        localStorage.setItem(USER_EMAIL,userEmail);
        answerEmail.classList.add(HIDDEN_CLASSNAME);
        answerPw.classList.remove(HIDDEN_CLASSNAME);
        pw.focus();
    }else{
        alert("Check the email format.");
        email.focus();
    }

}

function getPw(event){
    event.preventDefault();
    const userPw = pw.value;
    console.log(userPw);
    localStorage.setItem(USER_PW,userPw);
    answerPw.classList.add(HIDDEN_CLASSNAME);
    main.classList.remove(HIDDEN_CLASSNAME);
    answerTodo.classList.remove(HIDDEN_CLASSNAME)
}


cookiesLogin();
answerName.addEventListener("submit",getName);
answerEmail.addEventListener("submit",getEmail);
answerPw.addEventListener("submit",getPw);

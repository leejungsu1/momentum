const body = document.querySelector("body");
function changeBackImg(){
    const imgList = ["img1.jpeg","img2.jpeg","img3jpeg"];
    const num = Math.floor(Math.random()*imgList.length);
    body.style.backgroundImage = `url(./img/img${num+1}.jpeg)`
}
changeBackImg()
window.addEventListener('load', changeBackImg);


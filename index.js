document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}
timeLeft = 10;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};
setTimeout(countdown, 1000);
let btn =document.querySelector(".button-div");
let tn = document.querySelector(".link");
function link (){
	btn.style.visibility = "visible"
}
setTimeout(link, 11000);
 let menu = document.querySelector(".main-nav");
 
 setTimeout(function nav (){
	menu.style.visibility = "visible";
}, 5000)
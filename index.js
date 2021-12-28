/*document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}*/
/*timeLeft = 10;

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

*/
function showTime(){
	let  date = new Date();
	let h = date.getHours(); // 0 - 23
	let m = date.getMinutes(); // 0 - 59
	let s = date.getSeconds(); // 0 - 59
	let session = "am";
	
	if(h == 0){
		h = 12;
	}
	
	if(h > 12){
		h = h - 12;
		session = "pm";
	}
	
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	
	let time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	
	setTimeout(showTime, 1000);
	
  }
  
  showTime();

/*const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle')
let toggleMenu = () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML= "<i class='fas fa-bars'></i>"
    }else{
        menu.classList.add("active")
        toggle.querySelector("a").innerHTML ="<i class='fas fa-times'></i>"
    }
    
}
//toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".li");
function toggleli(){
    const items = document.querySelectorAll(".li");
    if (this.classList.contains("submenu-active")){
        this.classList.remove("submenu-active");
    }else if (menu.querySelector(".submenu-active")){
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    }else{
        this.classList.add("submenu-active");
    }
    }

for (let item of items){
    if (item.querySelector(".submenu")){
        item.addEventListener('click', toggleli, false);
        item.addEventListener('keypress', toggleli, false);


    }
}
//close submenu
function closeSubMenu (e){
    let isClickInside = menu.contains(e.target);
    if(!isClickInside && menu.querySelector('.subemenu-active')){
        menu.querySelector('.submenu-active').
        classList.remove('submenu-active')
    }

}
document.addEventListener('click', closeSubMenu, false)

let rwd = document.querySelectorAll("#rwdc");
 let chng = () => {
    let rwd = document.querySelectorAll("#rwdc");
    return 
    for (i=0; i < rwd.length; i++){
        rwd[i].addEventListener('mouseover', chng, true);
    }
 }*/
 let main = document.querySelectorAll('#icon');
 for (let i = 0; i <main.length; i++) {
     const element = main[i];
     element.classList.add('hvr-grow');
 }
console.log(main)
let newsA = document.querySelectorAll("#an");
for (let i = 0; i <newsA.length; i++) {
    const element = newsA[i];
    element.classList.add('text-dark');
}
let show = document.querySelector("#show");
let uii = () => {
	setTimeout(function (){
		show.innerHTML = "<img src='C:/nsbmb/wrkimgs/img3.jpg'  width='100%'; height='auto'>";
	},2500);
	setTimeout(function (){
		show.innerHTML = "<img src='wrkimgs/img5.png'  width='100%'; height='auto'>";
	},5000);
	setTimeout(function (){
		show.innerHTML = "<img src='C:/nsbmb/wrkimgs/excos.jpg'  width='100%'; height='auto'>";
	},7500);
};
setInterval(uii,9000);
 





















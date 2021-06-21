const menu = document.querySelector('.menu');
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
toggle.addEventListener("click", toggleMenu, false);

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

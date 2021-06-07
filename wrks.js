let navul = document.getElementsByTagName('ul')
navul.classList.add('navbar-nav')
let navItems = ['journals', 'membership', 'covid news', 'announcements'];
for (let i=0; i<navItems.length; i++){
    let a = document.createElement('a');
    let txt = document.createTextNode(navItems[i]);
    a.appendChild(txt);
    a.classList.add('nav-link');
    navL.appendChild(a);  
};

setTimeout(() => {
    alert('wrll')
}, 1000);

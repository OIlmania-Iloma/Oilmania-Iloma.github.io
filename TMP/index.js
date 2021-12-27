/*let imgchng = () => {
    let box = document.querySelector('top-box-a');
    let img = document.createElement('img');
    img.attributes("src", "img\pexels-andrea-piacquadio-3937468.jpg");
    let chng = box.innerHTML = img;
    return chng;
}*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === ".main-nav") {
      x.className += " responsive";
    } else {
      x.className = ".main-nav";
    }
  }
  

// JS goes here

//The code below works on live server but does not work in githb html preview
// window.addEventListener('load', function () {
//   icon = document.querySelector(".icon");
//   body = document.querySelector("body");
//   showDiv = document.querySelector(".show-div");
//   container = document.querySelector(".container");
//   close = document.querySelector(".close");
//   icon.addEventListener("click", function () {
//   icon.style.display = "none";
//   showDiv.style.display = "block";
//   container.style.display = "none";
//    })

//   close = document.querySelector(".close");
//   close.addEventListener("click", function () {
//   icon.style.display = "block";
//   showDiv.style.display = "none";
//   container.style.display = "block";

//     })


//   }) 

class ToggleMenu {
  constructor(domElement) { 
      this.domElement = domElement; 
      this.toggleButton = this.domElement.querySelector('.menu-nav'); 

       this.toggleButton.addEventListener('click', this.expandNav);

   }

   expandNav() {
      const navs = document.querySelectorAll('.nav');

       Array.from(navs).forEach(element => element.classList.toggle('show'));
  }

}

const navs = document.querySelectorAll('.nav').forEach( navs => new ToggleMenu(navs));
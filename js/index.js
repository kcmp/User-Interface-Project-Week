// JS goes here
window.addEventListener('load', function () {
    icon = document.querySelector(".icon");
    body = document.querySelector("body");
    showDiv = document.querySelector(".show-div");
    container = document.querySelector(".container");
    close = document.querySelector(".close");
    icon.addEventListener("click", function () {
    icon.style.display = "none";
    showDiv.style.display = "block";
    container.style.display = "none";
     })
  
     close = document.querySelector(".close");
     close.addEventListener("click", function () {
     icon.style.display = "block";
     showDiv.style.display = "none";
     container.style.display = "block";
  
     })  
   })

   //highlight feature for navbar
const link = document.querySelectorAll('nav a');
for(i=0;i<link.length;i++){
	link[i].addEventListener('mouseenter',function(event){
		event.target.style.color = teal;
	})
	link[i].addEventListener('mouseout', function(event){
		event.target.style.color = white;
	})
}
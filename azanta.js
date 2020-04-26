// loader
var loader=document.querySelector(".loader");
var main=document.getElementById("main");
 function init(){
   setTimeout(()=>{
     loader.style.opacity=0;
     loader.style.display="none";

     main.style.display="block";

       main.style.opacity=1;

   },3000);
 }
 init();
// testimonials
const slides=document.querySelector(".slider").children;
 const indicatorImages=document.querySelector(".slider-indicator").children;

for(let i=0; i<indicatorImages.length; i++){
indicatorImages[i].addEventListener("click",viewTestimonial)
}
function viewTestimonial(){
  for(let j=0; j<indicatorImages.length; j++){
    indicatorImages[j].classList.remove("activeimg");
  }
this.classList.add("activeimg");
const id=this.getAttribute("data-id");
for(let j=0; j<slides.length; j++){
  slides[j].classList.remove("active");
}
slides[id].classList.add("active");
}


// toggle menu
let toggleNavStatus=false;
let trigger=document.querySelector(".trigger");
trigger.addEventListener("click",toggleNav)

function toggleNav(){
  let getSidebar=document.querySelector(".sidebar");
  let getSidebarUl=document.querySelector(".sidebar ul");
  let getSidebarLinks=document.querySelectorAll(".sidebar a");


if (toggleNavStatus===false){
  getSidebarUl.style.visibility="visible";
  getSidebar.style.width="30%";

  toggleNavStatus=true;
}
else if (toggleNavStatus===true){

  getSidebar.style.width="0%";
  getSidebarUl.style.visibility="hidden";
  toggleNavStatus=false;
}
}

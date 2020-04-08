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

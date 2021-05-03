var ic=document.getElementsByClassName("icon")[0];
var con=document.getElementsByClassName("link")[0];
var diss=document.querySelector("body");

document.getElementsByClassName("content")[0].style.display="none";

ic.addEventListener("click",function(){

        con.classList.add("newClass");
          document.getElementsByClassName("content")[0].style.display="block";
       document.getElementsByClassName("newClass")[0].style.width="40%";

});


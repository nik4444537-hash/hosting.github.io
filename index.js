document.getElementsByClassName("btn")[0].addEventListener("click",colorChanger);
var color=document.getElementsByClassName("text")[0];
var bg=document.getElementsByTagName("body")[0];

var arr=["red","green","yellow","grey","blue"];

function colorChanger(){
var c=Math.floor(Math.random()*10);
c=Math.floor(c/2);

   
      bg.style.backgroundColor=arr[c];
      color.innerHTML="Background-color:"+arr[c];
      
}
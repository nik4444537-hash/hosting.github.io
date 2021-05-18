var btn=document.querySelectorAll("button")[0];
var head=document.querySelectorAll("h1")[0];

var arr=["red","yellow","green","grey","pink"];

btn.addEventListener("click",function(){

var num=Math.floor(Math.random()*10);
num=Math.floor(num/2);

console.log(num);
head.innerHTML="Background Color:"+arr[num];
document.body.style.backgroundColor=arr[num];

});
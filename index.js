var btn=document.querySelectorAll("button")[0];
console.log(btn);
var i=document.getElementsByClassName("icon")[0];
var n=document.getElementsByClassName("navigation")[0];
var link=document.getElementsByClassName("links")[0];


var head=document.getElementsByClassName("header")[0];

var obj=head.getBoundingClientRect();

console.log(obj.top);

if(obj.top<-38){
i.style.display="none";
link.style.display="none";
n.style.display="block";
console.log("yes");
}
else{
    i.style.display="block";
    link.style.display="block";
    n.style.display="none";  
    console.log("no"); 
}



// toggle button clicked
btn.addEventListener("click",function(){


if(i.classList.contains("itemList")){
    i.classList.remove("itemList");
}
else{
    i.classList.add("itemList");  
}

});




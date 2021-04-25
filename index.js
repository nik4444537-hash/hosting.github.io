var con=document.getElementById("content");
var task=document.getElementById("hh");

var w;

task.style.display="none";


var res=function(e){
w=e.target.outerWidth;
if(w<=996){  
    con.style.display="none"; 
    task.style.display="block";
}
else{
    con.style.display="block"; 
    task.style.display="none";  
}
}

window.addEventListener("resize",res);


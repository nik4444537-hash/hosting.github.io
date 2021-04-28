// hide list item
document.getElementById("nav-id").style.display="none";

document.getElementById("nav-button").addEventListener("click",navopen);
document.getElementById("cross").addEventListener("click",navclose);



// open button function called
function navopen(){
document.getElementById("nav-id").style.display="block";  
document.getElementById("nav-id").style.width="170px";
}

// close button function called
function navclose(){
    document.getElementById("nav-id").style.display="none";  
    document.getElementById("nav-id").style.width="0px";
    }


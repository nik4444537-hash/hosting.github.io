var initialIndex=1;
plusMinusSlide(initialIndex);



// called function 
function slideByButton(i){
plusMinusSlide(initialIndex+=i);
}

function plusMinusSlide(n){
    var pho=document.getElementsByClassName("photos");
    if(n>pho.length){
     initialIndex=1;
    }
    if(n<1){
      initialIndex=pho.length;
    }

    for(var i=0;i<pho.length;i++){
       pho[i].style.display="none";  
    }

    pho[initialIndex-1].style.display="block";
}
var playToPause=document.getElementsByClassName("play")[0];

function playPause(){

if(playToPause.src=="./Pause256_25040.png"){
playToPause.src="./Play1Normal_26969.png";
}
else{
    playToPause.src="./Pause256_25040.png";
}
}

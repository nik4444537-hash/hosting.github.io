
var start=document.getElementById("start");

var stopp=document.getElementById("stop");

var reset=document.getElementById("reset");

var stopwatchTimer=document.getElementById("stopwatch-timer");

var sec=0;
var milli=0;
var setIn;

// call startButton when clicked on start
start.addEventListener("click",startButton);

//when clicked on stop Button
stopp.addEventListener("click",stopButton);

//when clicked on reset Button
reset.addEventListener("click",resetButton);


// timer function called from setinterval function 
function timer(){
    milli++;

    if(milli<10&&sec<10){
        stopwatchTimer.innerHTML="0"+sec+":"+"0"+milli;
    }

    else if(milli>=10&&sec<10){
        stopwatchTimer.innerHTML="0"+sec+":"+milli;

        if(milli==100){
            sec++;

            

            milli=0;
        stopwatchTimer.innerHTML="0"+sec+":"+"0"+milli;
        }
    }

    
    else if(milli<10&&sec>=10){
        stopwatchTimer.innerHTML=sec+":"+"0"+milli;
    }

    else if(milli>=10&&sec>=10){
        stopwatchTimer.innerHTML=sec+":"+milli;

        if(milli==100){
            sec++;

            

            milli=0;
        stopwatchTimer.innerHTML=sec+":"+"0"+milli;
        }

    }
    

}


// called function when click on start button
function startButton(){
    setIn=setInterval(timer,10);
}

// stop button called 
function stopButton(){
    clearInterval(setIn);
}

// resetButton called
function resetButton(){
    stopButton();
    stopwatchTimer.innerHTML="00:00";
} 

var day=document.getElementsByClassName("days")[0];
var hour=document.getElementsByClassName("hours")[0];
var minute=document.getElementsByClassName("minutes")[0];
var second=document.getElementsByClassName("seconds")[0];

var cl=setInterval(function(){

// end of sale timing
var d=new Date();

var remainMinutes=60-d.getMinutes();
var remainSeconds=60-d.getSeconds();
var remainHours=d.getHours();

// adding zeroes
if(remainHours<10){
  remainDays=15-d.getDate();
  remainHours=10-d.getHours();

  remainHours="0"+remainHours;
  remainHours="0"+remainHours;
}

else{
  remainDays=15-d.getDate();
  remainDays--;
  remainHours=24-(d.getHours()-10);
}

// adding zeroes
if(remainMinutes<10){
  remainMinutes="0"+remainMinutes;
}

// adding zeroes
if(remainSeconds<10){
  remainSeconds="0"+remainSeconds;
}

day.innerHTML=remainDays;
hour.innerHTML=remainHours;
minute.innerHTML=remainMinutes;
second.innerHTML=remainSeconds;


},1000);



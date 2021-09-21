document.querySelector("header").style.color="red"; //chenges the color of  header of each web page to orange

document.querySelector("footer").style.color="orange";//chenages the color of the footer




//here we create two functions:one function will change the already existing photo to a different one and the other will reverse the outcome
function diffImg() {
    document.querySelector(".cr").src='background1.jpeg'; 
  }
  
  function normalImg() {
      document.querySelector(".cr").src="cryptophoto.jpeg";
  
  }
  

  
//when we click the header it changes the color back to black
  function diffColor(){
    document.querySelector("header").style.color="black";
  }

  






//for each day it displays a different message
var d=new Date();
var n = d.getDay();

if(n==1){
    document.querySelector(".day").innerHTML="Hello,its Monday!";
}else if(n==2){
    document.querySelector(".day").innerHTML="Hello,its Tuesday!";
}else if(n==3){
    document.querySelector(".day").innerHTML="Hello,its Wednesday!";
}else if(n==4){
    document.querySelector(".day").innerHTML="Hello,its Thursday!";
}else if(n==5){
    document.querySelector(".day").innerHTML="Hello,its Friday!";
}else if(n==6){
    document.querySelector(".day").innerHTML="Hello,its Saturday!";
}else if(n==0){
    document.querySelector(".day").innerHTML="Hello,its Sunday!";
}



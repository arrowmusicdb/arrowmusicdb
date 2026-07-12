// Live Clock

function updateClock() {

const now=new Date();

document.getElementById("time").innerHTML=
now.toLocaleTimeString("en-IN",{
hour12:false
});

document.getElementById("date").innerHTML=
now.toLocaleDateString("en-IN",{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
});

}

setInterval(updateClock,1000);

updateClock();


// Demo Weather

document.getElementById("weatherTemp").innerHTML="31°C";

document.getElementById("weatherCity").innerHTML="Jaipur";


// Visualizer

const bars=document.querySelectorAll(".bar");

setInterval(()=>{

bars.forEach(bar=>{

bar.style.height=(40+Math.random()*90)+"px";

});

},200);


// Fullscreen Shortcut

document.addEventListener("keydown",e=>{

if(e.key==="f"){

if(!document.fullscreenElement){

document.documentElement.requestFullscreen();

}else{

document.exitFullscreen();

}

}

});

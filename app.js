function updateClock() {

const now = new Date();

const time = now.toLocaleTimeString('en-IN',{
hour12:false
});

const date = now.toLocaleDateString('en-IN',{
weekday:'long',
day:'numeric',
month:'long',
year:'numeric'
});

document.getElementById("time").innerHTML = time;
document.getElementById("date").innerHTML = date;

}

setInterval(updateClock,1000);

updateClock();

document.getElementById("weather").innerHTML="Jaipur • 31°C";

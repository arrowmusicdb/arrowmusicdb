// =========================
// Arrow Music Command Center
// =========================

// Live Clock
function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    const date = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const clock = document.getElementById("clock");
    const dateBox = document.getElementById("date");

    if (clock) clock.textContent = time;
    if (dateBox) dateBox.textContent = date;
}

updateClock();
setInterval(updateClock, 1000);

// Weather
document.getElementById("weatherTemp").textContent = "31°C";
document.getElementById("weatherCity").textContent = "Jaipur";
document.getElementById("weatherMain").textContent = "31°C";
document.getElementById("weatherText").textContent = "Clear Sky";

// Audio Visualizer
const bars = document.querySelectorAll(".bar");

setInterval(() => {
    bars.forEach(bar => {
        bar.style.height = (30 + Math.random() * 90) + "px";
    });
}, 180);

// Fade In
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity .8s";
        document.body.style.opacity = "1";
    }, 100);
});

// ==========================
// Arrow Music Command Center
// ==========================

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

    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();

// Demo Weather
document.getElementById("weatherTemp").textContent = "31°C";
document.getElementById("weatherCity").textContent = "Jaipur";

// Demo YouTube
document.getElementById("youtubeSubs").textContent = "Loading...";
document.getElementById("youtubeViews").textContent = "Views : Loading...";
document.getElementById("youtubeVideos").textContent = "Videos : Loading...";

// Demo Instagram
document.getElementById("instaFollowers").textContent = "Loading...";
document.getElementById("instaPosts").textContent = "Posts : Loading...";

// Audio Visualizer Animation
const bars = document.querySelectorAll(".bar");

setInterval(() => {
    bars.forEach(bar => {
        bar.style.height = (30 + Math.random() * 90) + "px";
    });
}, 180);

// Boot Animation
window.onload = () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = "1";
    }, 100);
};

// Keyboard Shortcut
document.addEventListener("keydown", e => {

    if (e.key === "f") {

        if (!document.fullscreenElement) {

            document.documentElement.requestFullscreen();

        } else {

            document.exitFullscreen();

        }

    }

});

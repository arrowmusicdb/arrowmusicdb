// =======================
// Arrow Music Command Center
// =======================

// Live Clock
function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

updateClock();
setInterval(updateClock, 1000);

// Audio Visualizer Animation
const bars = document.querySelectorAll(".bar");

function animateBars() {
    bars.forEach(bar => {
        const h = Math.floor(Math.random() * 80) + 30;
        bar.style.height = h + "px";
    });
}

setInterval(animateBars, 180);

// Auto Fullscreen (browser support required)
document.body.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    }
}, { once: true });

// Smooth Fade In
window.onload = () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity .8s";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
};

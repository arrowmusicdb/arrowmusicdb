setInterval(() => {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString();
}, 1000);

document.getElementById("date").textContent = "Arrow Music";

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

yesBtn.addEventListener("click", () => {
  window.location.href = "yes_page.html";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// ❤️ Таймер отношений
function updateTimer() {
  const startDate = new Date("2024-10-10T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerText =
    `Wir sind seit ${days} Tagen, ${hours} Stunden, ${minutes} Minuten und ${seconds} Sekunden zusammen 💞`;
}

setInterval(updateTimer, 1000);
updateTimer();

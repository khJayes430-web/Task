const screens = [...document.querySelectorAll(".screen")];
const stepLabel = document.getElementById("stepLabel");
let current = 0;

function showScreen(index) {
  current = index;
  screens.forEach((screen, i) => screen.classList.toggle("active", i === index));
  stepLabel.textContent = `${String(index + 1).padStart(2, "0")} / ${String(screens.length).padStart(2, "0")}`;
}

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => showScreen(Math.min(current + 1, screens.length - 1)));
});

document.getElementById("tease").addEventListener("click", () => {
  document.getElementById("teaseText").textContent = "Too late, the birthday magic has found you 😂";
});

document.getElementById("replay").addEventListener("click", () => showScreen(0));

const confetti = document.querySelector(".confetti");
const colors = ["#fff2df", "#ffd166", "#fce4ec", "#8ee3d2", "#7c6cf2"];
for (let i = 0; i < 28; i++) {
  const piece = document.createElement("span");
  piece.style.setProperty("--x", `${Math.random() * 100}%`);
  piece.style.setProperty("--d", `${5 + Math.random() * 8}s`);
  piece.style.setProperty("--delay", `${-Math.random() * 12}s`);
  piece.style.setProperty("--c", colors[i % colors.length]);
  confetti.appendChild(piece);
}

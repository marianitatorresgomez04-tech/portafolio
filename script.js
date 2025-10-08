const canvas = document.getElementById("reveal");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fondo negro inicial
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Efecto de luz
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const radius = 100;

  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, "rgba(0, 150, 255, 0.4)");
  gradient.addColorStop(1, "rgba(0, 150, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
});

// Funcionalidad de menú
document.querySelector(".menu button:nth-child(1)").addEventListener("click", () => {
  alert("View clicked");
});

document.querySelector(".menu button:nth-child(2)").addEventListener("click", () => {
  alert("Contact clicked");
});

document.querySelector(".menu button:nth-child(3)").addEventListener("click", () => {
  alert("Playground clicked");
});

document.querySelector(".menu button:nth-child(4)").addEventListener("click", () => {
  alert("Works clicked");
});

// Funcionalidad de idioma
const h1 = document.querySelector("h1");

document.querySelector(".lang-selector button:nth-child(1)").addEventListener("click", () => {
  // Español
  h1.textContent = "Mariana Torres";
  alert("Idioma cambiado a Español");
});

document.querySelector(".lang-selector button:nth-child(2)").addEventListener("click", () => {
  // Inglés
  h1.textContent = "Mariana Torres";
  alert("Language changed to English");
});

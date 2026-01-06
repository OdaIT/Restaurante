// Selecionar todos os carrosséis
const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  // Elementos específicos de CADA carrossel
  const imgs = carousel.querySelectorAll(".slides img");
  const dots = carousel.querySelectorAll(".dot");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  
  let i = 0; // Índice independente para cada carrossel

  function show(n) {
    i = (n + imgs.length) % imgs.length;
    imgs.forEach((img) => (img.style.transform = `translateX(-${i * 100}%)`));
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
  }

  // Event listeners específicos para cada carrossel
  prevBtn.onclick = () => show(i - 1);
  nextBtn.onclick = () => show(i + 1);
  dots.forEach((d, idx) => (d.onclick = () => show(idx)));

  // Autoplay independente para cada carrossel (opcional)
  setInterval(() => show(i + 1), 5000);
});
const carousel = document.querySelector(".carousel");

// Elementos do carrossel
const imgs = carousel.querySelectorAll(".slides img");
const dots = carousel.querySelectorAll(".dot");
const prevBtn = carousel.querySelector(".prev");
const nextBtn = carousel.querySelector(".next");

let i = 0; 

function show(n) {
  i = (n + imgs.length) % imgs.length;
  imgs.forEach((img) => (img.style.transform = `translateX(-${i * 100}%)`));
  dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
}

// Event listeners
prevBtn.onclick = () => show(i - 1);
nextBtn.onclick = () => show(i + 1);
dots.forEach((d, idx) => (d.onclick = () => show(idx)));

// Autoplay
setInterval(() => show(i + 1), 5000);

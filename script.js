const imgs = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
let i = 0;

function show(n) {
  i = (n + imgs.length) % imgs.length;
  imgs.forEach((img) => (img.style.transform = `translateX(-${i * 100}%)`));
  dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
}

document.querySelector(".prev").onclick = () => show(i - 1);
document.querySelector(".next").onclick = () => show(i + 1);
dots.forEach((d, idx) => (d.onclick = () => show(idx)));

// Autoplay (opcional)
setInterval(() => show(i + 1), 4000);
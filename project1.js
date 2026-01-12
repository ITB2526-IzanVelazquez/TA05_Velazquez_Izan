const images = [
  "img/project1-web.png",
  "img/project1-web-2.png",
  "img/project1-web-3.png"
];

let idx = 0;

const imgEl = document.getElementById("carouselImage");
const counterEl = document.getElementById("carouselCounter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function render(){
  if (!imgEl || !counterEl) return;
  imgEl.src = images[idx];
  counterEl.textContent = `${idx + 1} / ${images.length}`;
}

prevBtn?.addEventListener("click", () => {
  idx = (idx - 1 + images.length) % images.length;
  render();
});

nextBtn?.addEventListener("click", () => {
  idx = (idx + 1) % images.length;
  render();
});

render();

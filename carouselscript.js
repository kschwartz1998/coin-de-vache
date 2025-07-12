const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const body = document.body;

const bgColors = [
  "#8c7764", // light roast
  "#8c6e13", // med roast
  "#3e2b20", // dark roast
  "#9fc3f2", // match 1
  "#d8c252"  // match 2
];

let index = 0;

function updateCarousel(i) {
  track.style.transform = `translateX(-${i * 100}vw)`;
  body.style.backgroundColor = bgColors[i];
}

document.querySelector('.left').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel(index);
});

document.querySelector('.right').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel(index);
});

// initial view
updateCarousel(index);

const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.switch-button');
const slider = document.querySelector('.slider');
const slideWidth = slides[0].clientWidth;

let currentSlide = 0;
let intervalId;

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
    currentSlide = index;
    clearInterval(intervalId); // Stop the automatic sliding
  });
});

function goToNextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  buttons.forEach(btn => btn.classList.remove('active'));
  buttons[currentSlide].classList.add('active');
}

function startAutoAnimation() {
  intervalId = setInterval(goToNextSlide, 5000); // Interval duration in milliseconds (change as needed)
}

startAutoAnimation();

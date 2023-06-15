const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.switch-button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slider').style.transform = `translateX(-${slideWidth * index}px)`;
  });
});

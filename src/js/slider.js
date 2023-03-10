let counter = 1;
let nexbutton = document.querySelector(
  '.swiper-next'
);
let prevbutton = document.querySelector(
  '.swiper-prev'
);
let counterText = document.querySelector(
  '.feedback__counter'
);
let array = document.getElementsByClassName(
  'swiper-slide'
);
if (counter === 1) {
  prevbutton.classList.remove('.swiper-prev');
  prevbutton.classList.add('swiper-disabled');
}
nexbutton.addEventListener('click', function () {
  if (counter < 4) {
    counter += 1;
    counterText.textContent = `0${counter}/04`;
  }
  if (counter === 4) {
    nexbutton.setAttribute('disabled', true);
  }
  if (counter === 1) {
    prevbutton.classList.add('swiper-disabled');
  }
  if (counter > 1) {
    prevbutton.classList.remove(
      'swiper-disabled'
    );
  }
});
prevbutton.addEventListener('click', function () {
  if (counter > 1) {
    counter -= 1;
    counterText.textContent = `0${counter}/04`;
    nexbutton.removeAttribute('disabled');
    nexbutton.classList.add('swiper-next');
  }
  if (counter === 1) {
    prevbutton.classList.add('swiper-disabled');
  }
});
let swiper = new Swiper('.swiper', {
  rebuildOnUpdate: true,
  updateOnWindowResize: true,
  observer: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

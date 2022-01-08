'use strict';

const images = document.querySelectorAll('.slider .slider-line img'),
    sliderLine = document.querySelector('.slider-line'),
    nextBtn = document.querySelector('.slider-next'),
    prevBtn = document.querySelector('.slider-prev');
let count = 0, width;

const rollSlider = () => {
    sliderLine.style.transform = `translate(-${count * width}px)`;
}

const init = () => {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = `${width * images.length}px`;
    images.forEach(item => item.style.width = `${width}px`);
    rollSlider();//правка смещения при resize
}
init();
window.addEventListener('resize', init);

const toNextSlide = () => {
    count ++;
    (count >= images.length) && (() => {count = 0})()
    rollSlider();
}

const toPrevSlide = () => {
    count --;
    (count < 0) && (() =>{count = images.length - 1})();
    rollSlider();
}

document.addEventListener('click', (e) => {
    if (e.target === nextBtn) toNextSlide();
    if (e.target === prevBtn) toPrevSlide();
});

let x1 = null;
const handleTouchstart = (e) => {
    const firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
}

const handleTouchmove = (e) => {
    if(!x1 || !e.target.closest('.container')) {
        return false;
    }
    const x2 = e.touches[0].clientX;
    const xDiff = x2 - x1;
    (xDiff > 0) ? toPrevSlide() : toNextSlide();
    x1 = null;
}

document.addEventListener('touchstart', handleTouchstart, false);
document.addEventListener('touchmove', handleTouchmove, false);
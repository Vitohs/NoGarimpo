document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slider');
    let current = 0;
    const interval = 2000;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('on', i === index);
        });
    }

    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, interval);
});
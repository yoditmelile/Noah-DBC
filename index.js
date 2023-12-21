let currentSlide = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatic slide change (optional)
setInterval(nextSlide, 5000); // Change slide every 5 seconds
const dots = document.querySelectorAll('.slider-dot');
const slides = document.querySelectorAll('.slide');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        updateDots(index);
    });
});

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}
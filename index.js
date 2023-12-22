let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

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

const sliderContainer = document.querySelector('.slider');

sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; 

    const deltaX = touchEndX - touchStartX;

    if (deltaX > swipeThreshold) {
        prevSlide();
    } else if (deltaX < -swipeThreshold) {
        nextSlide();
    }
}

sliderContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
});


// setInterval(nextSlide, 5000); 

const dots = document.querySelectorAll('.slider-dot');

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


document.getElementById('downloadButton').addEventListener('click', function() {
    var vCardFileUrl = 'https://vcf.fyi/5e955ac5';
    var link = document.createElement('a');
    link.href = vCardFileUrl;
    link.download = 'Yonas Teklu.vcf';
    document.body.appendChild(link);
     link.click();
    document.body.removeChild(link);
});

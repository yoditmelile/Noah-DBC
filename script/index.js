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
    var vCardFileUrl = 'https://vcf.fyi/5aa18949';
    var filename = 'Yonas_teklu.vcf'; 

    function downloadFile(url, filename) {
        var link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    downloadFile(vCardFileUrl, filename);
});


var img = document.getElementById("imagee");
var nameElement = document.querySelector(".name");
var originalPosition = {
    top: "65%", 
   left: "10%"
};

function enlargeImg() {
    nameElement.classList.add("hidden");

    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var position;

    if (windowWidth <= 768) { 
        position = {
            top: "60%",  
            left: "30%"  
        };
    } else {
       
        position = {
            top: "50%",  
            left: "35%"  
        };
    }

    img.style.top = position.top;
    img.style.left = position.left;

    img.style.transform = "scale(2)";
    img.style.transition = "transform 0.45s ease";

    document.addEventListener("click", resetImgOutside);
}



function resetImg() {
    nameElement.classList.remove("hidden");
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.45s ease";

   
    img.style.top = originalPosition.top;
    img.style.left = originalPosition.left;

    document.removeEventListener("click", resetImgOutside);
}

function resetImgOutside(event) {
    if (!img.contains(event.target)) {
        resetImg();
    }
}

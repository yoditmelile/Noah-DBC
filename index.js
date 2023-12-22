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

document.getElementById('downloadContact').addEventListener('click', function() {
    
    var imageUrl = 'https://drive.google.com/file/d/1P8QmVzzTLYeTjpoWGSYAz7LhqAJ2N8fW/view?usp=sharing ';
  
    
    var vCardData = 'BEGIN:VCARD\nVERSION:3.0\nFN:Yonas Teklu\nTEL:0913118633\nPHOTO;VALUE=URI:' + imageUrl + '\nEND:VCARD';
  
  
    var blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
  

    var a = document.createElement('a');
  
   
    a.download = 'contact.vcf';
    a.href = window.URL.createObjectURL(blob);
  
   
    document.body.appendChild(a);
    a.click();
  
   
    document.body.removeChild(a);
  });
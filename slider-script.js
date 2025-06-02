let currentSlide = 1;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Clone first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.classList.add('clone');
lastClone.classList.add('clone');

// Append clones
slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slides[0]);

// Update slide list
const allSlides = document.querySelectorAll('.slide');
slidesContainer.style.width = `${allSlides.length * 100}%`;
allSlides.forEach(slide => {
    slide.style.flex = '0 0 100%';
});

// Start at first original slide
slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

function goToSlide(index) {
    slidesContainer.style.transition = 'transform 2.5s ease-in-out';
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
}

// Reset position if on clone
slidesContainer.addEventListener('transitionend', () => {
    const realSlides = document.querySelectorAll('.slide:not(.clone)');
    if (allSlides[currentSlide].classList.contains('clone')) {
        slidesContainer.style.transition = 'none';
        if (currentSlide === 0) {
            currentSlide = realSlides.length;
        } else if (currentSlide === allSlides.length - 1) {
            currentSlide = 1;
        }
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
});

function nextSlide() {
    if (currentSlide >= allSlides.length - 1) return;
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    if (currentSlide <= 0) return;
    goToSlide(currentSlide - 1);
}

// Auto-play
let autoPlayInterval;
function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
}
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}
startAutoPlay();

// Pause on hover
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

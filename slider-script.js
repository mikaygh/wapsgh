let currentSlide = 1; // Start from the first real slide (after prepended clone)
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

// Append clones
slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

// Recalculate all slides after cloning
const allSlides = document.querySelectorAll('.slide');
const totalSlidesWithClones = allSlides.length;

// Set slides container width
slidesContainer.style.width = `${totalSlidesWithClones * 100}%`;

// Set each slide to take 100% width
allSlides.forEach(slide => {
    slide.style.flex = '0 0 100%';
});

// Initial slide position
slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

function showSlide(index) {
    slidesContainer.style.transition = 'transform 1.8s ease-in-out';
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;

    // Handle infinite loop jump (from clone to real)
    if (index === totalSlidesWithClones - 1) {
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = `translateX(-100%)`;
            currentSlide = 1;
        }, 1500);
    }

    if (index === 0) {
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = `translateX(-${(totalSlides) * 100}%)`;
            currentSlide = totalSlides;
        }, 1500);
    }
}

function nextSlide() {
    if (currentSlide < totalSlidesWithClones - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

// Auto-play
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

startAutoPlay();

const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', stopAutoPlay);
slider.addEventListener('mouseleave', startAutoPlay);

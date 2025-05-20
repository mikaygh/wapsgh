function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close nav menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');

    if (navLinks.classList.contains('active') && 
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Close nav menu on scroll
window.addEventListener('scroll', function () {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Close nav menu on orientation change or resize
window.addEventListener('orientationchange', closeNavOnChange);
window.addEventListener('resize', closeNavOnChange);

function closeNavOnChange() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }

    // Also hide the media dropdown if open
    const dropdown = document.getElementById('mediaDropdown');
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
}

// Toggle media dropdown
function toggleMediaDropdown() {
    const dropdown = document.getElementById('mediaDropdown');
    dropdown.classList.toggle('show');
}

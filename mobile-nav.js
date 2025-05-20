function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// nav menu closes  when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');

    if (navLinks.classList.contains('active') && 
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

//  nav menu Closes on scroll
window.addEventListener('scroll', function () {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// Toggle media dropdown
function toggleMediaDropdown() {
    const dropdown = document.getElementById('mediaDropdown');
    dropdown.classList.toggle('show');
}






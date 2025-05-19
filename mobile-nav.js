
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close the nav menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');

    // If nav is open AND click is outside both nav and hamburger
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Toggle media dropdown
function toggleMediaDropdown() {
    const dropdown = document.getElementById('mediaDropdown');
    dropdown.classList.toggle('show');
}


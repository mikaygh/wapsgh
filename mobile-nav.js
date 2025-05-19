function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}


// Toggle media dropdown
function toggleMediaDropdown() {
const mediaDropdown = document.getElementById('mediaDropdown');
if (mediaDropdown.style.display === 'block') {
mediaDropdown.style.display = 'none';
} else {
mediaDropdown.style.display = 'block'; 
}
}


function toggleMediaDropdown() {
    const dropdown = document.getElementById('mediaDropdown');
    dropdown.classList.toggle('show');
  }

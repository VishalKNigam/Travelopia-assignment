// State variables
let menuOpen = false;
let isActive = false;

// Functions to update state
function setMenuOpen(value) {
  menuOpen = value;
}

function setIsActive(value) {
  isActive = value;
}

// Functions
function handleClose() {
  setMenuOpen(false);
  setIsActive(false);
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  if (menuOpen) {
    navLinks.classList.remove("open");
  } else {
    navLinks.classList.add("open");
  }
  setMenuOpen(!menuOpen);
}

function openModal() {
  alert("Hello World")
}

function closeModal() {
  document.getElementById("myModal").classList.add("hidden");
  setIsActive(false);
}

// Event listener for button click to open modal
document.getElementById("openModalBtn").addEventListener("click", function() {
  openModal();
});

// Event listener for close button click to close modal
document.getElementById("closeModalBtn").addEventListener("click", function() {
  closeModal();
});


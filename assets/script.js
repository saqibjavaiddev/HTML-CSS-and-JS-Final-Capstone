// ==== JS for Mobile Menu ==== //
const openIcon = document.querySelector('#humberger');
const closeIcon = document.querySelector('.closeIcon');
const navbar = document.querySelector('.nav');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const navbarOverlay = document.getElementById('navbar-overlay');

// Open Menu on Click (Event) //

openIcon.addEventListener('click', () => {
  navbarOverlay.style.width = '100%';
  navbar.classList.add('blur');
  header.classList.add('blur');
  main.classList.add('blur');
});

// Close Menu on Click (Event) //

closeIcon.addEventListener('click', () => {
  navbarOverlay.style.width = '0%';
  navbar.classList.remove('blur');
  header.classList.remove('blur');
  main.classList.remove('blur');
});

const hamburger = document.querySelector('#mobile-menu-button');
const navMenu = document.querySelector('.mobile-menu');
const xBox = document.querySelector('.header-cross');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

xBox.addEventListener('click', () => {
  navMenu.classList.remove('active');
});
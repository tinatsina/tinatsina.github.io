const hamburger = document.querySelector('#mobile-menu-button');
const navMenu = document.querySelector('.mobile-menu');
const xBox = document.querySelector('.header-cross');
const blurBackground = document.querySelector('.headline');


// Event Listener for hamburger menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  blurBackground.classList.toggle('active');
});


// Event Listener for xBox on click
xBox.addEventListener('click', () => {
  navMenu.classList.remove('active');
  blurBackground.classList.remove('active');
});

// Javascript code for pop up window

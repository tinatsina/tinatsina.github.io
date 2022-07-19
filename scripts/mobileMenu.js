const hamburger = document.querySelector('#mobile-menu-button');
const navMenu = document.querySelector('.mobile-menu');
const xBox = document.querySelector('.header-cross');
const blurBackground = document.querySelector('.headline');

// Modal target constants

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-closed-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach( button => {
  button.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');  
  });
});

closeModalButtons.forEach( button => {
  button.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
});

function openModal(modal) {
  if (modal == null) {
    return
  }
  modal.classList.add('active');
  overlay.classList.add('active');
}

function openModal(modal) {
  if (modal == null) {
    return
  }
  modal.classList.remove('active');
  overlay.classList.remove('active');
}



























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


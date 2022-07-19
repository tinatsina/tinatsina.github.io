const hamburger = document.querySelector('#mobile-menu-button');
const navMenu = document.querySelector('.mobile-menu');
const xBox = document.querySelector('.header-cross');
const blurBackground = document.querySelector('.headline');

// Modal target constants

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-closed-button]');
const overlay = document.getElementById('overlay');

// Modal HTML Text Targets

let modalHeader = document.querySelector('.modal-header-text');























// DOM Data from Javascript

let modalObject = {
  modal_1: {
    portHeading: 'Tonic Objec',
    portList1: 'CANOPY',
    portList2: 'Back End Dev',
    portList3: '2015',
    toolList1: 'HTML',
    toolList2: 'CSS',
    toolList3: 'Javascript',
    paragraph: 'lorem ipsum blah blah',
    backGround: 'img/xx.png'
  },
  modal_2: {
    portHeading: 'Mulit-Post Stories',
    portList1: 'Facebook',
    portList2: 'Full Stack Dev',
    portList3: '2015',
    toolList1: 'HTML',
    toolList2: 'Ruby on rails',
    toolList3: 'Javascript',
    paragraph: 'lorem ipsum blah blah',
    backGround: 'img/xx.png'
  },
  modal_3: {
    portHeading: 'Facebook 360',
    portList1: 'Facebook',
    portList2: 'Full Stack Dev',
    portList3: '2015',
    toolList1: 'HTML',
    toolList2: 'Python',
    toolList3: 'Mongo DB',
    paragraph: 'lorem ipsum blah blah',
    backGround: 'img/xx.png'
  },
  modal_4: {
    portHeading: 'Uber Navigation',
    portList1: 'UBER',
    portList2: 'Lead Developer',
    portList3: '2018',
    toolList1: 'HTML',
    toolList2: 'CSS',
    toolList3: 'Javascript',
    paragraph: 'lorem ipsum blah blah',
    backGround: 'img/xx.png'
  }
}

openModalButtons.forEach( button => {
  button.addEventListener('click', () => {

    modalHeader.textContent= modalObject.modal_1.portHeading;

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


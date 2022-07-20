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

// Button Checks Per Modal

const modalButton_1 = document.querySelector('#modal-button-1');
const modalButton_2 = document.querySelector('#modal-button-2');
const modalButton_3 = document.querySelector('#modal-button-3');
const modalButton_4 = document.querySelector('#modal-button-4');

// The Button Checks Per Modal
let buttonCountCheck = 0;

// The Modal Targets Update the Button Checks
modalButton_1.addEventListener('click', () => {
  buttonCountCheck=1;
});

modalButton_2.addEventListener('click', () => {
  buttonCountCheck=2;
});

modalButton_3.addEventListener('click', () => {
  buttonCountCheck=3;
});

modalButton_4.addEventListener('click', () => {
  buttonCountCheck=4;
});





















// DOM Data from Javascript

let modalObject = {
  modal_1: {
    portHeading: 'Tonic Under',
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

    // Modal Data Feeder
    dataFeeder(buttonCountCheck);

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

function dataFeeder(num) {
  if (num === 1) {
    modalHeader.textContent= modalObject.modal_1.portHeading;
  } else if (num === 2) {
    alert('Button 2 Clicked');
  } else if (num === 3) {
    alert('Button 3 Clicked');
  } else if (num === 4) {
    alert('Button 4 Clicked');
  } else {
    alert('Error');
  }
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


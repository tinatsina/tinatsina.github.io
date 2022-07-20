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
let modalList1 = document.querySelector('.modal-list1-text');
let modalList2 = document.querySelector('.modal-list2-text');
let modalList3 = document.querySelector('.modal-list3-text');
let modalParagraph = document.querySelector('.modal-paragraph-text');
let modalComponent1 = document.querySelector('.component-text-1');
let modalComponent2 = document.querySelector('.component-text-2');
let modalComponent3 = document.querySelector('.component-text-3');

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
    portList1: 'CANOPIE',
    portList2: 'Back End Dev',
    portList3: '2015',
    toolList1: 'XML',
    toolList2: 'SCSS',
    toolList3: 'EcmaScript 6',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    backGround: 'img/xx.png'
  },
  modal_2: {
    portHeading: 'Multi Stories',
    portList1: 'Facebook',
    portList2: 'Full Stack Dev',
    portList3: '2015',
    toolList1: 'HTML',
    toolList2: 'Ruby on rails',
    toolList3: 'Javascript',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    backGround: 'img/xx.png'
  },
  modal_4: {
    portHeading: 'Uber Nav',
    portList1: 'UBER',
    portList2: 'Lead Developer',
    portList3: '2018',
    toolList1: 'HTML',
    toolList2: 'CSS',
    toolList3: 'Javascript',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
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
    modalList1.textContent= modalObject.modal_1.portList1;
    modalList2.textContent= modalObject.modal_1.portList2;
    modalList3.textContent= modalObject.modal_1.portList3;
    modalParagraph.textContent= modalObject.modal_1.paragraph;
    modalComponent1.textContent= modalObject.modal_1.toolList1;
    modalComponent2.textContent= modalObject.modal_1.toolList2;
    modalComponent3.textContent= modalObject.modal_1.toolList3;
  } else if (num === 2) {
    modalHeader.textContent= modalObject.modal_2.portHeading;
    modalList1.textContent= modalObject.modal_2.portList1;
    modalList2.textContent= modalObject.modal_2.portList2;
    modalList3.textContent= modalObject.modal_2.portList3;
    modalParagraph.textContent= modalObject.modal_2.paragraph;
    modalComponent1.textContent= modalObject.modal_2.toolList1;
    modalComponent2.textContent= modalObject.modal_2.toolList2;
    modalComponent3.textContent= modalObject.modal_2.toolList3;
  } else if (num === 3) {
    modalHeader.textContent= modalObject.modal_3.portHeading;
    modalList1.textContent= modalObject.modal_3.portList1;
    modalList2.textContent= modalObject.modal_3.portList2;
    modalList3.textContent= modalObject.modal_3.portList3;
    modalParagraph.textContent= modalObject.modal_3.paragraph;
    modalComponent1.textContent= modalObject.modal_3.toolList1;
    modalComponent2.textContent= modalObject.modal_3.toolList2;
    modalComponent3.textContent= modalObject.modal_3.toolList3;
  } else if (num === 4) {
    modalHeader.textContent= modalObject.modal_4.portHeading;
    modalList1.textContent= modalObject.modal_4.portList1;
    modalList2.textContent= modalObject.modal_4.portList2;
    modalList3.textContent= modalObject.modal_4.portList3;
    modalParagraph.textContent= modalObject.modal_4.paragraph;
    modalComponent1.textContent= modalObject.modal_4.toolList1;
    modalComponent2.textContent= modalObject.modal_4.toolList2;
    modalComponent3.textContent= modalObject.modal_4.toolList3;
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


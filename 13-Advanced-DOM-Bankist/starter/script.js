'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => button.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling(Learn More button)
btnScrollTo.addEventListener('click', function (e) {
  // console.log('Button: ', e.target.getBoundingClientRect());
  // console.log('Section: ', section.getBoundingClientRect());
  // const sectionCoor = section.getBoundingClientRect();
  // console.log(window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'Vieport Height/Widht:',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // OldSchool way
  // window.scrollTo({
  //   left: sectionCoor.left + window.pageXOffset,
  //   top: sectionCoor.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // Modern way
  section.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////
// Page Navigation
// First approach
// document.querySelectorAll('.nav__link').forEach(function (ele) {
//   ele.addEventListener('click', function (e) {
//     e.preventDefault();
//     //console.log(this.href); //This will give abolute path which we don't require instead we can use getAttribute function
//     document
//       .querySelector(this.getAttribute('href'))
//       .scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Second approach using event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // Guard Clause
  if (!clicked) return;
  // Remove active classes from tab and content
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  //Activate tab
  clicked.classList.add('operations__tab--active');
  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener(
  'mouseover',
  // e => handleHover(e, 0.5)
  handleHover.bind(0.5)
);
nav.addEventListener(
  'mouseout',
  // e => handleHover(e, 1)
  handleHover.bind(1)
);

// Sticky Navbar

const currentCoordinates = section.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  if (window.scrollY > currentCoordinates.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };

////////////////////////////////////////////////////
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// const allSections = document.getElementsByTagName('section');
// console.log(allSections);
// console.log(document.getElementById('section--1'));
// const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved functionality and performance. <div class="btn btn--close-cookie">Got it!</div>`;
// header.append(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message);
//     // header.removeChild(message);
//   });
// message.style.backgroundColor = '#37383d';
// // message.style.color = 'black';
// message.style.width = '120%';
// // message.style.setProperty('background-color', 'white');

// // console.log(header.style.backgroundColor);

// console.log(header.dataset);

// const alertWindow = function () {
//   alert(`${this} element was clicked`);
//   console.log(this);
// };

// const headerImage = document.querySelector('.header__img');
// headerImage.addEventListener('click', alertWindow);
// const parentDiv = document.querySelector('.header__title');
// parentDiv.addEventListener('click', alertWindow);
// const headerDiv = document.querySelector('.header');
// headerDiv.addEventListener('click', alertWindow);
// const h1 = document.querySelector('h1');
// console.log(h1);
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'orangered';
// h1.lastElementChild.style.color = 'black';
// console.log(h1.parentNode);

// [...h1.parentElement.children].forEach(function (ele) {
//   if (ele !== h1) {
//     ele.style.backgroundColor = 'darkblue';
//   }
// });
// const button1 = document.querySelector('.operations__tab--1');
// const button2 = document.querySelector('.operations__tab--2');
// const button3 = document.querySelector('.operations__tab--3');

// const divContent1 = document.querySelector('.operations__content--1');
// const divContent2 = document.querySelector('.operations__content--2');
// const divContent3 = document.querySelector('.operations__content--3');

// const divButtons = document.querySelector('.operations__tab-container');
// divButtons.addEventListener('click', function (e) {
//   if (e.target.getAttribute('data-tab') == 1) {
//     if (!button1.classList.contains('operations__tab--active')) {
//       button3.classList.remove('operations__tab--active');
//       button2.classList.remove('operations__tab--active');
//       button1.classList.add('operations__tab--active');
//       divContent2.classList.remove('operations__content--active');
//       divContent3.classList.remove('operations__content--active');
//       divContent1.classList.add('operations__content--active');
//     } else {
//       button3.classList.remove('operations__tab--active');
//       button2.classList.remove('operations__tab--active');
//       divContent2.classList.remove('operations__content--active');
//       divContent3.classList.remove('operations__content--active');
//     }
//   }
//   if (e.target.getAttribute('data-tab') == 2) {
//     if (!button2.classList.contains('operations__tab--active')) {
//       button3.classList.remove('operations__tab--active');
//       button1.classList.remove('operations__tab--active');
//       button2.classList.add('operations__tab--active');
//       divContent1.classList.remove('operations__content--active');
//       divContent3.classList.remove('operations__content--active');
//       divContent2.classList.add('operations__content--active');
//     } else {
//       button3.classList.remove('operations__tab--active');
//       button1.classList.remove('operations__tab--active');
//       divContent1.classList.remove('operations__content--active');
//       divContent3.classList.remove('operations__content--active');
//     }
//   }
//   if (e.target.getAttribute('data-tab') == 3) {
//     if (!button3.classList.contains('operations__tab--active')) {
//       button1.classList.remove('operations__tab--active');
//       button2.classList.remove('operations__tab--active');
//       button3.classList.add('operations__tab--active');
//       divContent1.classList.remove('operations__content--active');
//       divContent2.classList.remove('operations__content--active');
//       divContent3.classList.add('operations__content--active');
//     } else {
//       button1.classList.remove('operations__tab--active');
//       button2.classList.remove('operations__tab--active');
//       divContent1.classList.remove('operations__content--active');
//       divContent2.classList.remove('operations__content--active');
//     }
//   }
// });

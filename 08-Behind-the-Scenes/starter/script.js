'use strict';
// function add(a, b) {
//This is probalamatic and one one the reasons why we should use strict mode
//   console.log(this);
//   const multiplyTwo = (a, b) => {
//     console.log(this);
//     return a * b;
//   };
//   console.log(multiplyTwo(4, 5));
//   return a + b;
// }

// console.log(add(2, 3));
// var myName = 20;

// const nitin = {
//   firstName: 'Nitin',
//   lastName: 'Rajput',
//   birthYear: 1998,
//   calcage: function () {
//     var myName = 'Jainil';
//     this.myName = myName;
//     console.log(this);
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
//   greet: () => {
//     var myName = 'Jainil';
//     console.log(this);
//     console.log(this.firstName);
//   },
// };

// if (true) {
//   var car = 'maruti';
// }
// nitin.calcage();
// nitin.greet();
// console.log(window);

// nitin.greet();
// const kapil = {
//   birthYear: 2000,
// };

// kapil.calcage = nitin.calcage;
// console.log(nitin.calcage());
// console.log(kapil.calcage());

// console.log(multiplyTwo(4, 5));

// let h1 = document.querySelector('h1');
// console.log(h1, 'Hello');

// h1.addEventListener('click', function () {
//   if (!h1.style.color) {
//     h1.style.color = 'white';
//   }
//   console.log(this);
//   console.log(h1.style.color);
//   h1.style.color === 'white'
//     ? (h1.style.color = 'black')
//     : (h1.style.color = 'white');
// });

// const nitin = {
//   firstName: 'Nitin',
//   age: 25,
//   skill: {
//     primary: 'JS',
//     secondary: 'Python',
//   },
// };

// const nitinCopy = Object.assign({}, nitin);
// nitinCopy.skill.primary = 'HTML';
// console.log(nitin);
// console.log(nitinCopy);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   console.log(this);
//   return a + b;
// };

// console.log(addArrow(2, 3));

// function addDeclaration(a, b) {
//   console.log(arguments);
//   console.log(this);
//   return a + b;
// }

// addDeclaration(2, 3);

'use strict';
// const bookings = [];
// const ticketBooking = function (flightNum, numberPassengers = 1, price) {
//   const booking = {
//     flightNum,
//     numberPassengers,
//     price,
//   };
//   bookings.push(booking);
//   console.log(booking);
// };

// ticketBooking('Mh201', undefined, 300);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [firstWord, ...others] = str.split(' ');
//   return [firstWord.toUpperCase(), ...others].join(' ');
// };

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const returnFunct = greet('Hey!');
// returnFunct('Nitin');

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// greet('Hey!')('Nitin');
// const returnFunct = greet('Namastey!');
// returnFunct('Kapil');

// const greet = greeting => console.log(`${this}${greeting}`);
// greet('Hey!');

// const lufthansa = {
//   name: 'Lufthansa',
//   iatacode: 'LH',
//   booking: [],
//   book: function (flightNumber, passengerName) {
//     console.log(
//       `${passengerName} booked a seat on ${this.name} flight ${this.iatacode}${flightNumber}`
//     );
//     this.booking.push({
//       flightName: `${this.iatacode}${flightNumber}`,
//       passengerName,
//     });
//   },
// };
// lufthansa.book(10, 'Jonas Schmedtman');
// console.log(lufthansa);
// const bookingMethod = lufthansa.book;
// bookingMethod(11002, 'Nitin');

// const indigo = {
//   name: 'Indigo',
//   iatacode: 'IN',
//   booking: [],
// };

// lufthansa.book.call(indigo, [20, 'Nitin']);
// bookingMethod.call(indigo, 30, 'Kapil');
// console.log(indigo);
// lufthansa.plane = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.plane++;
//   console.log(this.plane);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const myBind = function(funct,this,rate,value){
//   return funct()
// }

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet('Hello')('Nitin');

// const addTax = function (rate, value) {
//   return value + value * rate;
// };
// // const addVat = addTax.bind(null, 0.23);

// const myBind = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// console.log(myBind(0.23)(100));

// Coding Challenge #1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

// // Task 1
// poll.registerNewAnswer = function () {
//   const userInput = Number(
//     prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     )
//   );
//   if (
//     userInput != 'Nan' &&
//     (userInput === 0 || userInput === 1 || userInput === 2 || userInput === 3)
//   ) {
//     this.answers[userInput] += 1;
//   } else {
//     console.log('Please Input a valid option!!😒');
//   }
//   this.displayResults(); //Task 4
// };

// // Task 2
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // Task 3
// poll.displayResults = function (type = 'array') {
//   if (type === 'array') {
//     console.log(this.answers ?? this);
//   } else if (type === 'string') {
//     console.log(
//       `Poll results are ${
//         this.answers ? this.answers.join(', ') : this.join(', ')
//       }`
//     );
//   }
// };
// //Bonus
// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1];
// poll.displayResults.call(data1);
// poll.displayResults.call(data1, 'string');
// poll.displayResults.call(data2);
// poll.displayResults.call(data2, 'string');

// (function () {
//   console.log('executed once, an IIFE!');
// })();
// {
//   const isPrivate = 'Nitin';
//   console.log(isPrivate);
// }
// console.log(isPrivate);

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`Passenger count : ${passengerCount}`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// console.dir(booker);
// console.log(booker);

// setTimeout(function () {
//   console.log('My name is Nitin Rajput');
// }, 5000);

// Coding Challenge #2
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

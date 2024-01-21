"use strict";
// let hasDriversLicense = true;
// if (hasDriversLicense) {
//   hasDriversLicense = false;
// } else {
//   console.log("It's okay try nxt time!");
// }
// console.log(hasDriversLicense);

// const private = "hello";
// const if ="Hello";

// logger();
// function logger() {
//   console.log("Hello !");
// }
// const a = logger;
// console.log(a + "Hello");
// console.log(logger());
// console.log(logger);
// console.log(typeof logger());
// console.log(typeof logger);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(calcAge2(1991));
// console.log(calcAge(1999));
// function calcAge2(birthYear) {
//   return 2023 - birthYear;
// }
// console.log(calcAge2);
// console.log(typeof calcAge2);

// const calcAge = function (birthyear) {
//   return 2023 - birthyear;
// };

// console.log(calcAge(1999));
// console.log(calcAge);
// console.log(typeof calcAge);

// console.log(typeof calcAge2 === typeof calcAge);
// console.log(
//   typeof function (birthyear) {
//     return 2023 - birthyear;
//   },
//   "Hello"
// );

// console.log(juiceProcessor(2, 3));

// function juiceProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   return `Your juice contains ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
// }
// console.log(juiceProcessor(4, 5));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtman",
//   friends: ["Micheal", "Peter", "Steven"],
//   job: "teacher",
//   age: 2037 - 1991,
// };

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtman",
//   friends: ["Micheal", "Peter", "Steven"],
//   job: "teacher",
//   age: 2037 - 1991,
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
//   calcAge1: (birthYear) => {
//     return 2037 - birthYear;
//   },
//   calcAge2: function calcAge2(birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas.calcAge(1990));
// console.log(jonas.calcAge1(1990));
// console.log(jonas.calcAge2(1990));

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtman",
//   friends: ["Micheal", "Peter", "Steven"],
//   job: "teacher",
//   birthYear: 1991,
//   calcAge: function () {
//     // console.log(this);
//     return 2037 - this.birthYear;
//   },
//   calcAge2: function calcAge2() {
//     return 2037 - this.birthYear;
//   },
//   calcAge1: () => {
//     return 2037 - jonas.birthYear;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas);
// console.log(jonas.calcAge2());
// console.log(jonas.calcAge1());

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtman",
//   friends: ["Micheal", "Peter", "Steven"],
//   job: "teacher",
//   birthYear: 1991,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(jonas.age);
// console.log(jonas.calcAge());
// console.log(jonas.age);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtman",
//   friends: ["Micheal", "Peter", "Steven"],
//   job: "teacher",
//   birthYear: 1991,
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   jonasSummary: function () {
//     this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//     return this.summary;
//   },
// };

// console.log(jonas.jonasSummary());
// console.log(jonas.summary, jonas.age);
// jonas.hasDriversLicense = false;
// console.log(jonas.summary, jonas.age);
// console.log(jonas.jonasSummary());
// console.log(jonas.summary, jonas.age);
// console.log(this);

// let newARR = [];

// const jonas = [
//   "Jonas",
//   "Schmedtman",
//   ["Micheal", "Peter", "Steven"],
//   "teacher",
//   2037 - 1991,
// ];

// for (let i = 0; i < jonas.length; i++) {
//   newARR.push(typeof jonas[i]);
// }
// console.log(newARR);

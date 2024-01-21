// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// const myArr = ["apple", "banana", "orange", "grape", "strawberry"];
// console.table(myArr);
// const myObj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   email: "johndoe@example.com",
//   isStudent: false,
//   hobbies: ["reading", "playing guitar", "hiking"],
//   address: {
//     street: "123 Main Street",
//     city: "Anytown",
//     zipCode: "12345",
//   },
// };

// console.table(myObj);

// const minMaxCalculator = function (t1, t2) {
//   let min = 0;
//   let max = 0;
//   const newArr = t1.concat(t2);
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] < min) {
//       min = newArr[i];
//     }
//     if (newArr[i] > max) {
//       max = newArr[i];
//     }
//   }
//   console.log(min, max);
//   return max - min;
// };

// console.log(minMaxCalculator([1, 2, 5, 6, 2, 3], [12, 5, 623, 7, 3]));

// Coding Challenge #1
const printForecast = function (arr) {
  let temp = "...";
  for (let i = 1; i <= arr.length; i++) {
    temp += `${arr[i - 1]}℃ in ${i} days...`;
  }
  console.log(temp);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

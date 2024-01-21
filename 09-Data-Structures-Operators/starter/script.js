'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// for (const word of flights.split('+_')) {
//   const filteredArr = word.split('_').join(' ').trim().split(';');
//   filteredArr[1] = filteredArr[1].slice(0, 3).toLocaleUpperCase();
//   filteredArr.splice(1, 0, 'from');
//   filteredArr[3] = filteredArr[3].slice(0, 3).toLocaleUpperCase();
//   filteredArr.splice(3, 0, 'to');
//   filteredArr[filteredArr.length - 1] = `(${filteredArr[
//     filteredArr.length - 1
//   ].replace(':', 'h')})`;
//   console.log(
//     `${filteredArr[0].includes('Delayed') ? '🔴' : ''} ${filteredArr.join(
//       ' '
//     )}`.padStart(45, ' ')
//   );
// }

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const [index, element] of menu.entries()) {
//   console.log(`${index + 1} : ${element}`);
// }

// const name = restaurant.name || 'No name';
// console.log(name);

// const addition =;
// console.log(addition);

// const sum = function (...arr) {
//   console.log(arr);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// };

// sum(2, 3, 4, 5);
// sum(...[2, 3, 5, 1, 10]);

// const { sat, ...weekdays } = restaurant.openingHours;
// weekdays.fri.close = 999;
// sat.close = 19092839;
// console.log(sat);
// console.log(weekdays);
// console.log(restaurant.openingHours);
// const [italian, , ...others] = restaurant.categories;
// console.log(italian, others);

// const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);
// restaurantCopy.name = 'Nitin';
// restaurantCopy.categories[0] = 'Glucose';
// console.log(restaurantCopy);
// console.log(restaurant);
// const { openingHours: hours, name: hotelName } = restaurant;
// console.log(hours, hotelName);
// hours.thu.close = 999;

// console.log(hours);
// console.log(restaurant);

// let c = [1, 2, [3, [4, 5]]];
// let d = [...c];
// let q = c[2];
// d[2] = [...c[2]];
// let a = [...c[2]];
// console.log(...c[2]);
// console.log(a);
// console.log(d);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.openingHours.thu.open = 999;
// console.log(restaurantCopy.openingHours);
// console.log(restaurant.openingHours);

// const fullName = 'Nitin Rajput';
// const fullNameArr = [...fullName];
// console.log(fullNameArr);
// const nestedArr = [1, 2, 3, 45, [32, 12, 56, 89]];
// const nestedArrCopy = [...nestedArr];
// nestedArrCopy[nestedArrCopy.length - 1] = 999;
// console.log(nestedArrCopy);
// console.log(nestedArr);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// const [a = 1, b = 1, c = 1, d = 1] = restaurant.mainMenu;
// console.log(a, b, c, d);
// console.log(restaurant.mainMenu[3]);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const {
//   fri: { open: openHour, close: closeHour, middle: milddleHour = 10 },
// } = hours;
// console.log(openHour, closeHour, milddleHour);

// let a = 111;
// let b = 100;
// let c, d;
// let { a, b, c, d } = { a: 0, b: 3, c: 10 };
// console.log(a, b);
// what js does is whenever it see curly brace in a code line it expects a codeblock and we can't assign a value to a code block
// ({ a, b, c, d = 1 } = { a: 0, b: 3, c: 10 });
// console.log(a, b, c, d);
// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);
// arr[0] = 10;
// console.log(arr);
// let [first, , , fourth] = restaurant.categories;
// console.log(first, fourth);
// [first, fourth] = [fourth, first];
// console.log(first, fourth);

// const [starterCourse, mainCourse] = restaurant.order(0, 0);
// console.log(starterCourse, mainCourse);

// const nestedArr = [2, 3, [5, 7]];
// const [a, b, [c, d]] = nestedArr;
// console.log(a, b, c, d);
// const arr = [1, 2, 3, 4];
// const [starterCourse, mainCourse] = restaurant.order(...arr);
// console.log(starterCourse, mainCourse);

// Coding Challenge #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //Task 1
// const [players1, players2] = game.players;
// //Task 2
// const [gk, ...fieldPlayers] = players1;
// //Task 3
// const allPlayers = [...players1, ...players2];
// //Task 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// //Task 5
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// //Task 6
// function printGoals(...playerNames) {
//   console.log(`Number of Goals Scored : ${playerNames.length}`);
//   for (let i = 0; i < playerNames.length; i++) {
//     console.log(playerNames[i]);
//   }
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
// //Task 7
// team1 < team2 && console.log(`${game.team1} is more likely to win`);
// team1 > team2 && console.log(`${game.team2} is more likely to win`);

// Coding Challenge #2
// Task 1
// for (const [goalNumber, playerName] of game.scored.entries()) {
//   console.log(`Goal ${goalNumber}: ${playerName}`);
// }

// Task 2
// let sumOfElements = 0;
// for (const i of Object.values(game.odds)) {
//   sumOfElements += i;
// }

// console.log(sumOfElements / Object.values(game.odds).length);

// Task 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${game[team] ? `victory ${game[team]}` : 'draw'}: ${odd}`
//   );
// }

// Task 4 (Bonus)
// const scorers = {};
// for (const playerName of game.scored) {
//   if (scorers[playerName]) {
//     scorers[playerName] += 1;
//   } else {
//     scorers[playerName] = 1;
//   }
// }
// console.log(scorers);

// const scorers = {};
// for (const playerName of game.scored) {
//   scorers[playerName] ? (scorers[playerName] +=1) : (scorers[playerName] = 1);
// }
// console.log(scorers);

// const arr = ['Nitin', 'Kapil', 'Mamta', 'Jainil'];
// for (let item of arr) {
//   if (item === 'Kapil') continue;
//   if (item === 'Nitin') break;
//   console.log(item);
// }

// for (const [index, element] of arr.entries()) {
//   console.log(index, element);
// }
// const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// const [, , , thurs, fri, sat] = weekdays;
// console.log(thurs, fri, sat);
// const openingHours = {
//   thurs: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// // // console.log(openingHours);

// // console.log(openingHours.mon);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we are open at ${open} and close around ${close}`);
// }

// console.log(document.querySelector('h1'));

// const newMap = new Map();
// newMap.set('Name', 'Nitin');
// newMap.set(restaurant, 'Restaurant Object');
// console.log(newMap.size);
// newMap.delete('Name');
// console.log(newMap.entries());
// console.log(newMap.get(restaurant));
// // newMap.clear();
// console.log(newMap);
// for (const i of newMap) {
//   console.log(i);
// }

// console.log([...newMap]);

// const userInputNumber = prompt('Input your Number: ');
// const userArr = [...userInputNumber];

// for (let i = userArr.length - 1; i >= 0; i--) {
//   console.log(userArr[i]);
// }
// console.log(userArr);

// const employeeData = [
//   [1, 'John Doe'],
//   [2, 'Jane Smith'],
//   [3, 'Robert Johnson'],
//   [4, 'Emily Davis'],
// ];

// const newMap = new Map(employeeData);
// console.log(newMap);
// console.log(Object.create([...new Map(Object.entries(restaurant))]));

//Coding Excercise #3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);
//Task 1
// const events = [...new Set(gameEvents.values())];
//Task 2
// const deleted = gameEvents.delete(64);
//Task 3
// console.log(
//   `An event happened, on average, every ${
//     [...gameEvents.keys()].pop() / gameEvents.size
//   } minutes`
// );
//Task 4
// for (const [key, value] of gameEvents) {
//   if (key <= 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

// const newFunct = function () {
//   console.log('Nitin');
// };

// gameEvents.set(100, newFunct);

// const newString = 'Nitin Rajput';
// console.log(newString[newString.length - 1]);
// const newString = 'Boarding door 23. Boarding door 23!!';
// console.log(newString.replaceAll('door', 'gate'));
// console.log(newString.replace('door', 'gate'));
// console.log(newString.toUpperCase());
// console.log(newString.toLowerCase());
// console.log(newString.startsWith('Board'));
// console.log(newString.startsWith('oa', 1));
// console.log(newString.endsWith('!'));
// console.log(newString.endsWith('3', -3));
// const newString1 = 'Nitin Rajput';
// const lastName = newString1.slice(newString1.indexOf(' ') + 1);
// const firstName = newString1.slice(0, newString1.indexOf(' '));
// console.log(firstName);
// // console.log(firstName + lastName);
// const [firsName1, lastName1] = newString1.split(' ');
// console.log(newString1.split(' '));
// console.log(firsName1 + lastName1);

// const capitalize = function (name) {
//   const nameArr = name.split(' ');
//   console.log(nameArr);
//   const newArr = [];
//   for (const ele of nameArr) {
//     newArr.push(ele[0].toUpperCase() + ele.slice(1));
//   }
//   return newArr.join(' ');
// };

// console.log(capitalize('nitin rajput'));

// const maskCreditCard = function (number) {
//   const convertedNumber = String(number);
//   const length = convertedNumber.length - 1;
//   const initialIndex = length - 3;
//   return convertedNumber.slice(initialIndex).padStart(length, '*');
// };

// console.log(maskCreditCard(6128127812291398));
// console.log(maskCreditCard('126438283821'));

// Coding Challenge #4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const userInput = document.querySelector('textarea').value;
//   if (userInput && userInput.includes('_')) {
//     for (const [index, item] of userInput.split('\n').entries()) {
//       const [firstWord, lastWord] = item.trim().toLowerCase().split('_');
//       console.log(
//         `${
//           (
//             firstWord + lastWord.replace(lastWord[0], lastWord[0].toUpperCase())
//           ).padEnd(20, ' ') + '✅'.repeat(index + 1)
//         }`
//       );
//     }
//   } else {
//     console.log('Pls input a valid variable name😓');
//     document.querySelector('textarea').value = '';
//   }
// });

// const newObj = { a: 10, b: 20, c: 30 };
// let a = 111;
// let b = 222;
// console.log(a, b);
// ({ a, b } = newObj);
// console.log(a, b);
// const str = 'Jonas';
// console.log(`${[[...str]]} Schmedtmann`);
// console.log(`${[...str]}`);
// console.log(...str);

// const nitin = ['n', 'i', 't', 'i', 'n'];
// console.log(nitin + 'Rajput');

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// AND assignment operator
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
const iterator = menu.entries();

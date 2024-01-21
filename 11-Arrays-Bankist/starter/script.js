'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sorted = false) {
  containerMovements.innerHTML = '';
  const movs = sorted ? [...movements].sort((a, b) => a - b) : movements;
  movs.forEach(function (value, index) {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__value">${value}€</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

const createUserNames = function (accounts) {
  accounts.map(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUserNames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, ele) => acc + ele, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
  const deposits = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${deposits}€`;

  const withdrawals = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .reduce(
      (acc, mov) =>
        mov * (account.interestRate / 100) > 1
          ? mov * (account.interestRate / 100) + acc
          : acc,
      0
    );
  labelSumInterest.textContent = `${interest}€`;
};

const refreshDisplayData = function (currentAccoun) {
  displayMovements(currentAccount.movements);
  // Display balance
  calcDisplayBalance(currentAccount);
  //Display summary
  calcDisplaySummary(currentAccount);
};
// calcDisplaySummary(account1.movements, 1.2);
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin?.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Emptying input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();
    // Display movements-
    refreshDisplayData(currentAccount);
    // displayMovements(currentAccount.movements);
    // // Display balance
    // calcDisplayBalance(currentAccount);
    // //Display summary
    // calcDisplaySummary(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
  const transferObject = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();
  if (
    transferObject &&
    transferAmount > 0 &&
    currentAccount.balance >= transferAmount &&
    transferObject.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-transferAmount);
    transferObject.movements.push(transferAmount);
    refreshDisplayData(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    currentAccount.movements.push(amount);
    refreshDisplayData(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const closeUserObject = accounts.find(
    acc => acc.userName === inputCloseUsername.value
  );
  const closeUserPin = Number(inputClosePin.value);
  inputCloseUsername.value = inputClosePin.value = '';
  if (
    closeUserObject &&
    closeUserObject.userName === currentAccount.userName &&
    closeUserObject.pin === closeUserPin
  ) {
    accounts.splice(
      accounts.findIndex(acc => acc.userName === closeUserObject.userName),
      1
    );
    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// const calcPrintBalance2 = function (accounts) {
//   return accounts.map((ele, index) =>
//     ele.movements.reduce((acc, ele) => acc + ele)
//   );
// };

// console.log(
//   accounts.find(account => account.owner === 'Steven Thomas Williams')
// );

// let temp = {};
// for (const acc of accounts) {
//   if (acc.owner.toLowerCase() === 'Steven Thomas Williams'.toLowerCase()) {
//     temp = { ...acc };
//   }
// }
// console.log(temp);
// console.log(calcPrintBalance2(accounts));

// const forEach = accounts.forEach(function (acc) {
//   return acc.owner
//     .toLowerCase()
//     .split(' ')
//     .map(word => word[0])
//     .join('');
// });
// console.log(forEach);
// console.log(computeUserNames(accounts));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// function doSomething(movement) {
//   if (movement > 0) {
//     console.log(`Deposited ${movement}`);
//   } else {
//     console.log(`Withdrawal ${Math.abs(movement)}`);
//   }
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log([...arr].slice(3)[0].toUpperCase());
// console.log(arr.slice().join());
//forEach method
// movements.forEach(function (movement) {
//   console.log(this);
//   if (movement > 0) {
//     console.log(`Deposited ${movement}`);
//   } else {
//     console.log(`Withdrawal ${Math.abs(movement)}`);
//   }
// });
// movements.forEach(movement => {
//   console.log(this);
//   if (movement > 0) {
//     console.log(`Deposited ${movement}`);
//   } else {
//     console.log(`Withdrawal ${Math.abs(movement)}`);
//   }
// });

// movements.forEach(doSomething);
// // function delclaration
// function myfunct(a) {
//   console.log(' Function Declaration working!!!!!');
// }
// // function expression
// (function (b) {
//   console.log('Function expression working!!!!');
// })();
// // arrow function
// (() => {
//   console.log('Arrow function working!!!!!');
// })();

// movements.forEach(function(currentElement,index,array){
//   if (currentElement<0)continue
//   else{
//     break
//   }
// })

// Coding Challenge #1

// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   // Task 1
//   const correctDogsJulia = [...dogsJulia];
//   correctDogsJulia.splice(0, 1);
//   correctDogsJulia.splice(-2, 2);
//   // Task 2
//   const correctedData = [...correctDogsJulia, ...dogsKate];
//   // Task 3
//   correctedData.forEach(function (dogAge, index) {
//     // dogAge >= 3
//     //   ? console.log(
//     //       `Dog number ${index + 1} is an adult, and is ${dogAge} years old`
//     //     )
//     //   : console.log(`Dog number ${index + 1} is still a puppy 🐶`);

//     (dogAge >= 3 &&
//       console.log(
//         `Dog number ${index + 1} is an adult, and is ${dogAge} years old`
//       )) ||
//       console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//     // });
//     // dogAge >= 3 &&
//     //   console.log(
//     //     `Dog number ${index + 1} is an adult, and is ${dogAge} years old`
//     //   );
//     // dogAge < 3 && console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//   });
// };
// // Task 4
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;
// const euroToUSDConverted = movements.map(function (mov) {
//   return mov * 1.1;
// });

// const euroToUSDConvertedArrow = movements.map(mov => mov * 1.1);
// console.log(euroToUSDConvertedArrow);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const maxValue = account2.movements.reduce(
//   (acc, ele) => (acc < ele ? ele : acc),
//   movements[0]
// );

// console.log(maxValue, account2.movements);
// // const withdrawals = movements.filter(mov => mov < 0);
// // console.log(withdrawals);

// const balance = movements.reduce(function (acc, ele, index, arr) {
//   console.log(acc, ele, index, arr);
//   return acc + ele;
// }, 0);

// console.log(balance);

// function somefunction() {
//   for (var i = 1; i < 21; i++) {
//     if (i % 2 == 0) {
//       console.log(i + ' is even');
//       return i + ' is even';
//     } else {
//       console.log(i + ' is odd');
//       return i + ' is odd';
//     }
//   }
// // }

// console.log(somefunction());

// Coding Challenge #2
// const calcAverageHumanAge1 = function (ages) {
//   // Task 1
//   const dogAgeInHuman = ages.map((ele, index, arr) =>
//     ele <= 2 ? 2 * ele : 16 + ele * 4
//   );
//   // Task 2
//   const filteredDogAgeInHuman = dogAgeInHuman.filter((ele, index) => ele >= 18);
//   // Task 3
//   const avgAdultDogHumanAge = filteredDogAgeInHuman.reduce(
//     (acc, ele, _, arr) => acc + ele / arr.length,
//     0
//   );

//   return avgAdultDogHumanAge;
// };

// console.log(calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]));

// Coding Challenge #3

// const calcAverageHumanAge = ages =>
//   ages
//     .map(ele => (ele <= 2 ? 2 * ele : 16 + ele * 4))
//     .filter(ele => ele >= 18)
//     .reduce((acc, ele, _, arr) => acc + ele / arr.length, 0);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// const allMovements = [];
// accounts.forEach(acc => allMovements.push(acc.movements));
// const allMovements2 = allMovements.flat();
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// Ascending Order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
// Decending Order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// console.log(movements);

// const constructor = new Array(100);
// constructor.fill(2, 0);

// const random = Array.from({ length: 100 }, (ele, index) =>
//   Math.trunc(Math.random() * 6 + 1)
// );
// console.log(constructor);
// console.log(random);

// const totalDeposits = accounts
//   .flatMap((ele, index) => ele.movements)
//   .filter(ele => ele > 0);

// const numberDeposits1000 = totalDeposits.reduce(
//   (sum, ele) => (ele >= 1000 ? (sum += 1) : sum),
//   0
// );
// console.log(totalDeposits);
// console.log(numberDeposits1000);
// cur>0 ?sums.deposits += curr : sums.withdrawals+= curr
// sums.{cur>0?deposits:withdrawals}  += curr

// const convertTitleCase = function (title) {
//   return title
//     .toLowerCase()
//     .split(' ')
//     .map((word, index) =>
//       word !== 'a' ? word.replace(word[0], word[0].toUpperCase()) : word
//     )
//     .join(' ');
//   console.log(wordsArr);
// };
// console.log(convertTitleCase('this is a nice title'));

// Coding Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// Task 1
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
// Task 2
// dogs.forEach(dog =>
//   dog.owners.includes('Sarah')
//     ? console.log(
//         `Sarah's dog is eating too ${
//           // Upper Limit of dog food
//           dog.recommendedFood * 0.1 + dog.recommendedFood >= dog.curFood
//             ? 'high'
//             : // Lower Limit of dog food
//             dog.recommendedFood - dog.recommendedFood * 0.1 <= dog.curFood
//             ? 'low'
//             : null
//         }`
//       )
//     : null
// );
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahDog.recommendedFood * 1.1 < sarahDog.curFood) {
  console.log(`Eating too much!`);
} else if (sarahDog.recommendedFood * 0.9 > sarahDog.curFood)
  console.log(`Eating too little!`);

// Task 3
// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];
// dogs.forEach(dog => {
//   if (dog.recommendedFood * 0.1 + dog.recommendedFood >= dog.curFood) {
//     dog.owners.forEach(dog => ownersEatTooMuch.push(dog));
//   } else if (dog.recommendedFood - dog.recommendedFood * 0.1 <= dog.curFood) {
//     dog.owners.forEach(dog => ownersEatTooLittle.push(dog));
//   }
// });
// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

// const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
//   (acc, dog) => {
//     if (dog.recommendedFood * 0.1 + dog.recommendedFood >= dog.curFood) {
//       dog.owners.forEach(owner => acc.ownersEatTooMuch.push(owner));
//     } else if (dog.recommendedFood - dog.recommendedFood * 0.1 <= dog.curFood) {
//       dog.owners.forEach(owner => acc.ownersEatTooLittle.push(owner));
//     }
//     return acc;
//   },
//   { ownersEatTooMuch: [], ownersEatTooLittle: [] }
// );

const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
  (acc, dog) => {
    if (dog.recommendedFood < dog.curFood) {
      dog.owners.forEach(owner => acc.ownersEatTooMuch.push(owner));
    } else if (dog.recommendedFood > dog.curFood) {
      dog.owners.forEach(owner => acc.ownersEatTooLittle.push(owner));
    }

    return acc;
  },
  { ownersEatTooMuch: [], ownersEatTooLittle: [] }
);

// Task 4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// Task 5
console.log(`${dogs.some(dog => dog.curFood === dog.recommendedFood)}`);

console.log(dogs);
// Task 6
console.log(
  `${dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )}`
);

// Task 7
const dogsOkay = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogsOkay);

// Task 8
const dogsShallowCopy = dogs.slice();
dogsShallowCopy.sort((a, b) => {
  if (a.recommendedFood > b.recommendedFood) {
    return 1;
  } else if (a.recommendedFood < b.recommendedFood) {
    return -1;
  }
});

console.log(dogsShallowCopy);
console.log(dogs);

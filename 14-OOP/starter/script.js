'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // This is not recommended
//   //   this.calcAge = function () {
//   //     consol.log( 2037 - this.birthYear);
//   //   };
// };
// Person.hey = function () {
//   console.log('Hey there 🙌');
//   console.log(this);
// };
// console.log(Person);
// console.dir(Person);
// Person.hey();
// const jonas = new Person('Jonas', 1998);
// jonas.hey();
// console.log(jonas);
// console.log(jonas instanceof Person);
// const matilda = new Person('Matilda', 2000);
// const john = new Person('John', 2012);
// console.log(Person);

// Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// console.log('Person prototype:', Person.prototype);
// jonas.calcAge();
// console.log('Jonas Object:', jonas.__proto__);
// console.log(Person.prototype === jonas.__proto__);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(jonas.__proto__.isPrototypeOf(Person));
// console.log(Person.prototype.isPrototypeOf(Person));

// Setting properties
// Person.prototype.species = 'Homo Sepiens';
// console.log(jonas.species, matilda.species);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
// console.log('jonas object:', jonas);
// console.log('Person constructor function:', Person);
// console.log(this);

// Prototype Chain and Inheritance
// console.dir(Person);

// ES6 Classes
//Class Expression
// const PersonCl = class {

// }
//Class Declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//Methods will be added to the prototype property of PersonCl class
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not valid`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hello There from class!!');
//   }
// }

// PersonCl.hey();

// const jessica = new PersonCl('Jessica', 1991);
// jessica.hey();
// console.log(jessica.fullName);
// const nitin = new PersonCl('Nitin Rajput', 1998);
// console.log(nitin.fullName);
// jessica.fullName('Nitin Rajput');
// jessica.calcAge();
// jessica.greet();
// console.log(PersonCl.prototype === jessica.__proto__);

//Getters and Setters

// const account = {
//   owner: 'Jonas',
//   movements: [200, 100, 300, 400],
//   get latest() {
//     return this.movements[this.movements.length - 1];
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 0;
// console.log(account.latest);

// // Object.create method
// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
//   init(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   },
// };

// const kapil = Object.create(PersonProto);
// kapil.birthYear = 1995;
// kapil.calcAge();

// const mamta = Object.create(PersonProto);
// mamta.init('Mamta Rajput', 1960);
// mamta.calcAge();
// Inheritance between classes: constructor functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// Inheritance between classes: using ES6 classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to the prototype property of PersonCl class
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hello ${this.firstName}`);
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not valid`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hello There from class!!');
//   }
// }

// class StudentCl extends PersonCl {
//   //   constructor(fullName, birthYear, course) {
//   //     super(fullName, birthYear);
//   //     this.course = course;
//   //   }

//   calcAge() {
//     console.log(
//       `${2037 - this.birthYear} is the age from method in Student Class`
//     );
//   }
// }

// const nitin = new StudentCl('Nitin Rajput', 1998);
// nitin.calcAge();
// console.log(nitin);

// Inheritance between classes using object.create method
// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
//   init(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (fullName, birthYear, course) {
//   PersonProto.init.call(this, fullName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `Hello my name is ${this.fullName}, my birth year is ${this.birthYear} and my course is ${this.course}`
//   );
// };
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();
// console.log(jay);

class Account {
  //Public Fields
  locale = navigator.language;
  //Private Fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  loan(amount) {
    if (this.#checkLoanApprove()) {
      this.#movements.push(amount);
      console.log('Loan Approve!!');
    } else {
      console.log('Loan Rejected!!');
    }
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
  //Private method
  #checkLoanApprove() {
    return true;
  }

  // Static methods
  static helper() {
    console.log('Help!!');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
acc1.loan(1000);
Account.helper();
// console.log(acc1.#pin);
// #####################################################
// Coding Challenge #1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`New speed of the car after accelerate : ${this.speed} Km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`New speed of the car after brake : ${this.speed} Km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// mercedes.brake();

// Coding Challenge #2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`The new speed of ${this.make} is ${this.speed} Km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`New speed of the car after brake : ${this.speed} Km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);
// ford.speedUS = 100;
// console.log(ford.speed);

// Coding Challenge #3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`New speed of the car after accelerate : ${this.speed} Km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`New speed of the car after brake : ${this.speed} Km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// // Linking Prototypes
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed}Km/h,with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);

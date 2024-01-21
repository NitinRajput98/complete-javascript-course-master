"use strict";
// Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeIndia = describeCountry("India", 1435, "Delhi");
const describeUSA = describeCountry("USA", 332.18, "Washington DC");
const describeCanada = describeCountry("Canada", 40, "Ottawa");
console.log(describeIndia);
console.log(describeUSA);
console.log(describeCanada);

// Function Declarations vs Expressions
const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

const percentageOfWorldPopulationIndia = percentageOfWorld1(1435);
const percentageOfWorldPopulationUSA = percentageOfWorld1(332.18);
const percentageOfWorldPopulationCanada = percentageOfWorld1(40);
console.log(
  percentageOfWorldPopulationIndia,
  percentageOfWorldPopulationUSA,
  percentageOfWorldPopulationCanada
);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
const perOfWorldPopulationIndia = percentageOfWorld2(1435);
const perOfWorldPopulationUSA = percentageOfWorld2(332.18);
const perOfWorldPopulationCanada = percentageOfWorld2(40);
console.log(
  perOfWorldPopulationIndia,
  perOfWorldPopulationUSA,
  perOfWorldPopulationCanada
);

// Arrow Functions
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
console.log(
  percentageOfWorld3(1435),
  percentageOfWorld3(332.18),
  percentageOfWorld3(40)
);

// Functions Calling Other Functions
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
}

console.log(
  describePopulation("India", 1435),
  describePopulation("USA", 332.18),
  describePopulation("Canada", 40)
);

// Introduction to Arrays
const populations = [1435, 332.18, 40, 10];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[populations.length - 1]),
];
console.log(percentages);

// Basic Array Operations (Methods)
const neighbours = ["Pakistan", "China", "Bangladesh", "Bhutan"];
neighbours.push("Utopia");
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
neighbours[neighbours.indexOf("Pakistan")] = "Pak";
console.log(neighbours);

// Introduction to Objects
// const myCountry = {
//   country: "India",
//   capital: "Delhi",
//   language: "Hindi",
//   population: 1435,
//   neighbours: ["Pakistan", "China", "Bangladesh", "Bhutan"],
// };
// console.log(myCountry);

// Dot vs Bracket Notation
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry["neighbours"].length} neighbouring countries and a capital called ${myCountry["capital"]}.`
// );
// myCountry.population = myCountry.population + 2;
// console.log(myCountry);
// myCountry["population"] = myCountry["population"] - 2;
// console.log(myCountry);

// Object Methods
const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1435,
  neighbours: ["Pakistan", "China", "Bangladesh", "Bhutan"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    return this.isIsland;
  },
};

myCountry.describe();
console.log(myCountry.checkIsland());

// Iteration: The for Loop
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}

// Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(populations);
console.log(percentages);
console.log(percentages2);

//Lopping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  // const currentArr = listOfNeighbours[i];
  for (let b = 0; b < listOfNeighbours[i].length; b++) {
    console.log(`Neighbour: ${listOfNeighbours[i][b]}`);
  }
}

//The while Loop
const percentages3 = [];
let counter = 0;
while (counter < populations.length) {
  percentages3.push(percentageOfWorld1(populations[counter]));
  counter++;
}
console.log(percentages);
console.log(percentages3);

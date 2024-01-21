// Values and Variables
// let country = "India";
// let continent = "Asia";
let population = 1406;
// console.log(country);
// console.log(typeof population);
// console.log(typeof continent);

// Data Types
// let isIsland = false;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
console.log(typeof language);

//  let, const and var
language = "hindi";
const country = "India";
const continent = "Asia";
const isIsland = false;
// isIsland = true;

// Basic Operators
const halfPopulation = population / 2;
console.log(halfPopulation);
population++; // population = population + 1
console.log(population);
const finlandPopulation = 6;
console.log(population > finlandPopulation);
const avgPopulation = 33;
console.log(population < avgPopulation);
// const description =
//   country +
//   " is in " +
//   continent +
//   ", and" +
//   " its " +
//   population +
//   " million people speak" +
//   " " +
//   language;
// console.log(description);

// Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Taking Decisions: if/else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

// Type Conversion and Coercion
console.log("9" - "5", typeof ("9" - "5")); // 4
console.log("19" - "13" + "17", typeof ("19" - "13" + "17")); // "617"
console.log("19" - "13" + 17, typeof ("19" - "13" + 17)); // 23
console.log("123" < 57, typeof ("123" < 57)); // false
console.log(5 + 6 + "4" + 9 - 4 - 2, typeof (5 + 6 + "4" + 9 - 4 - 2)); // 1143

// Equality Operators: == vs ===
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// Logical Operators
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// The switch Statement
console.log(language, "Language");
switch (language) {
  case "chinese":
  case "madarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers!");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// The Conditional (Ternary) Operator
population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`
);

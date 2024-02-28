'use strict';
// https://countries-api-836d.onrender.com/countries/
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src=${data.flags.png} />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${
        data.languages[Object.keys(data.languages)[0]]
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[Object.keys(data.currencies)[0]].name
      }</p>
    </div>
  </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (mssg) {
  countriesContainer.insertAdjacentText(
    'beforeend',
    `Opps an error occured ${mssg}`
  );
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     const html = `
//   <article class="country">
//   <img class="country__img" src=${data.flags.png} />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.official}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${
//       data.languages[Object.keys(data.languages)[0]]
//     }</p>
//     <p class="country__row"><span>💰</span>${
//       data.currencies[Object.keys(data.currencies)[0]].name
//     }</p>
//   </div>
// </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('Portugal');
// getCountryData('USA');
// getCountryData('France');
// getCountryData('Germany');
// getCountryData('Bharat');

// CalllBack Hell
// const renderCountry = (data, className = '') => {
//   const html = `
//     <article class="country ${className}">
//     <img class="country__img" src=${data.flags.png} />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.official}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         data.population / 1000000
//       ).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${
//         data.languages[Object.keys(data.languages)[0]]
//       }</p>
//       <p class="country__row"><span>💰</span>${
//         data.currencies[Object.keys(data.currencies)[0]].name
//       }</p>
//     </div>
//   </article>
//     `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // First api call
//   const request1 = new XMLHttpRequest();
//   request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request1.send();
//   request1.addEventListener('load', function () {
//     console.log(request1, 'Hello');
//     const [data] = JSON.parse(this.responseText);
//     //Render first country card
//     renderCountry(data);
//     const [neighbour] = data.borders;
//     if (!neighbour) reutrn;
//     // Second api call
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     // Render neighbour country card
//     request2.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       renderCountry(data, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('Portugal');

// setTimeout(() => {
//   console.log('1 sec');
//   setTimeout(() => {
//     console.log('2 sec');
//     setTimeout(() => {
//       console.log('3 sec');
//       setTimeout(() => {
//         console.log('4 sec');
//         setTimeout(() => {
//           console.log('5 sec');
//           setTimeout(() => {
//             console.log('6 sec');
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// Api call using promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');

//Chaining promises
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const [neighbour] = data[0].borders;
//       // Country 2(Neighbouring Country)
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'));
// };

// getCountryData('portugal');

// Handling Rejected Promises
// Manually throw errors
// const getJSON = function (url, errormssg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${response.status}`);
//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`)
//     .then(data => {
//       renderCountry(data[0]);
//       const [neighbour] = data[0].borders;
//       // Country 2(Neighbouring Country)
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => renderError(err.message))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// // getCountryData('portugal');
// btn.addEventListener('click', function () {
//   getCountryData('India');
// });

//Event loop in practice
console.log('Code start');
setTimeout(() => console.log('0 Seconds timer'), 0);
Promise.resolve('First Resolved Promise').then(res => console.log(res));
// console.log(Promise.resolve('First Resolved Promise#####')); This promise gets instantly resolved
Promise.resolve('Second Resolved Promise').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Code end');

// Coding challenge #1

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => response.json())
    .then(data => {
      if (data.city === 'Throttled! See geocode.xyz/pricing') {
        throw new Error(`${data.city}`);
      }
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => response.json())
    .then(data => {
      if (!data?.[0]) throw new Error(`Country data does not exist!`);
      renderCountry(data[0]);
    })
    .catch(err => console.log(`This is the error that occurred: ${err}`));
};

btn.addEventListener('click', function () {
  // whereAmI(52.508, 13.381);
  // whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
});

// whereAmI(52.508, 13.381);

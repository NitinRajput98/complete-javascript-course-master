'use strict';
// https://countries-api-836d.onrender.com/countries/
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const getCountryAndNeighbour = function (country) {
  // First api call
  const request1 = new XMLHttpRequest();
  request1.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request1.send();
  request1.addEventListener('load', function () {
    console.log(request1, 'Hello');
    const [data] = JSON.parse(this.responseText);
    //Render first country card
    renderCountry(data);
    const [neighbour] = data.borders;
    if (!neighbour) reutrn;
    // Second api call
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    // Render neighbour country card
    request2.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      renderCountry(data, 'neighbour');
    });
  });
};

getCountryAndNeighbour('Portugal');

setTimeout(() => {
  console.log('1 sec');
  setTimeout(() => {
    console.log('2 sec');
    setTimeout(() => {
      console.log('3 sec');
      setTimeout(() => {
        console.log('4 sec');
        setTimeout(() => {
          console.log('5 sec');
          setTimeout(() => {
            console.log('6 sec');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

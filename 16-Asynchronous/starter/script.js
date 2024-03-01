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
const getJSON = function (url, errormssg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${response.status}`);
    return response.json();
  });
};
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
// console.log('Code start');
// setTimeout(() => console.log('0 Seconds timer'), 0);
// Promise.resolve('First Resolved Promise').then(res => console.log(res));
// // console.log(Promise.resolve('First Resolved Promise#####')); This promise gets instantly resolved
// Promise.resolve('Second Resolved Promise').then(res => {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(res);
// });
// console.log('Code end');
// Promisifying setTimeout function
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(5)
//   .then(res => {
//     console.log('I waited for 5 seconds');
//     return wait(4);
//   })
//   .then(res => {
//     console.log('I waited for 4 seconds');
//     return wait(3);
//   })
//   .then(res => {
//     console.log('I waited for 3 seconds');
//     return wait(2);
//   })
//   .then(res => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(res => {
//     console.log('I waited for 1 seconds');
//     return wait(0);
//   })
//   .then(res => {
//     console.log('I waited for 0 seconds');
//   });

// Promise.resolve(
//   'I waited for 0 seconds, becuase I got resolved immediately'
// ).then(res => console.log(res));

// const getLocation = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getLocation()
//     .then(res => {
//       const { latitude: lat, longitude: lng } = res.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.city === 'Throttled! See geocode.xyz/pricing') {
//         throw new Error(`${data.city}`);
//       }
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (!data?.[0]) throw new Error(`Country data does not exist!`);
//       renderCountry(data[1]);
//     })
//     .catch(err => console.log(`This is the error that occurred: ${err}`));
// };

// btn.addEventListener('click', function () {
//   whereAmI();
// });

// getLocation()
//   .then(res => {
//     console.log(res);
//     console.log(res.coords.latitude, res.coords.longitude);
//   })
//   .catch(err => console.error(err));

const getLocation = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// USing async/await
// Error Handling with try/catch
// const whereAmI = async function () {
//   try {
//     const res = await getLocation();
//     const { latitude: lat, longitude: lng } = res.coords;
//     const res2 = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const data = await res2.json();
//     if (data.city === 'Throttled! See geocode.xyz/pricing')
//       throw new Error('The geocode api got Throttled!');
//     // console.log(`You are in ${data.city}, ${data.country}`);
//     const response2 = await fetch(
//       `https://restcountries.com/v3.1/name/${data.country}`
//     );
//     const data2 = await response2.json();
//     if (!data2?.[0]) throw new Error('Country Data does not exist!');
//     renderCountry(data2[1]);
//     return `You are in ${data.city}, ${data.country}`;
//   } catch (err) {
//     // console.log(`The following error happened: ${err.message} ❌❌❌❌`);
//     throw err;
//   }
// };

// console.log('1: Getting the location');
// (async () => {
//   try {
//     const result = await whereAmI();
//     console.log(`2 result: ${result}`);
//   } catch (err) {
//     console.log(`2 error: ${err.message}`);
//   } finally {
//     console.log('3: Finished getting location');
//   }
// })();
// Promise.all (Parallel asynchronous tasks)
const get3Countries = async function (c1, c2, c3) {
  try {
    // const data1 = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const data2 = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const data3 = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log(data1[0], data2[0], data3[0]);
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(country => country[0].capital[0]));
  } catch (err) {
    console.log(err.message);
  }
};
// get3Countries('portugal', 'usa', 'canada');
// console.log('3: Returning the location');

// Promise.race()
(async function () {
  try {
    const res = await Promise.race([
      getJSON(`https://restcountries.com/v3.1/name/ushjjhja`),
      getJSON(`https://restcountries.com/v3.1/name/portuqwgal`),
      getJSON(`https://restcountries.com/v3.1/name/caqwdnada`),
    ]);
    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
})();

// Coding challenge #1

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.city === 'Throttled! See geocode.xyz/pricing') {
//         throw new Error(`${data.city}`);
//       }
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (!data?.[0]) throw new Error(`Country data does not exist!`);
//       renderCountry(data[0]);
//     })
//     .catch(err => console.log(`This is the error that occurred: ${err}`));
// };

// btn.addEventListener('click', function () {
//   // whereAmI(52.508, 13.381);
//   // whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

// // whereAmI(52.508, 13.381);

// Coding Challenge #2
//Part 1
// let currentImg;
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const imgEl = document.createElement('img');
//     imgEl.src = imgPath;
//     imgEl.addEventListener('load', function (e) {
//       const imgContainer = document.querySelector('.images');
//       imgContainer.append(imgEl);
//       resolve(imgEl);
//     });
//     imgEl.addEventListener('error', function (e) {
//       reject(imgEl);
//     });
//   });
// };

// createImage('./img/img-1.jpg')
//   .then(res => {
//     currentImg = res;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(res => {
//     currentImg = res;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(`${err} ❌❌`));

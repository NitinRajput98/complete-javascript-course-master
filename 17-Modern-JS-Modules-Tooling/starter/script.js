import cart_One from './shopingCart.js';
import { addCart as cartAdd } from './shopingCart.js';
cartAdd('Apple');
cartAdd('Grape');
console.log(cart_One);
//Hot module replacement
if (module.hot) {
  module.hot.accept();
}

// import { addCart, cart } from './shopingCart.js';
// console.log(addCart);

// const result = (function () {
//   const cart = [];
//   const customVariable = 'Hello';

//   const addCart = function (product) {
//     cart.push(product);
//   };

//   return {
//     cart,
//     addCart,
//   };
// })();

// console.log(result);

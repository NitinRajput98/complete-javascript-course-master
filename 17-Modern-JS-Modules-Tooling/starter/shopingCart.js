const cart = [];

const addCart = function (product) {
  cart.push(product);
};
export const customVariable = 'Hello';
console.log(cart, 'Exporting module');
export default cart;

export { addCart, cart };

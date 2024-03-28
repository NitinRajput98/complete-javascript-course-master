import * as model from './model';
import recipeView from './views/recipeView';

import 'core-js/stable'; // Polyfilling everything else
import 'regenerator-runtime/runtime'; // Polyfilling async/await

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Displaying Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
['hashchange', 'load'].map(ev => window.addEventListener(ev, controlRecipes));

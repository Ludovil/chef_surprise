console.log("recipe page");

import { fetchRandomRecipe } from "./api.js";
import { renderRecipe } from "./views.js";

async function init() {
  try {
    const recipe = await fetchRandomRecipe();
    renderRecipe(recipe);
    console.log(recipe);
  } catch (error) {
    console.log(error.message);
  }
}

init();

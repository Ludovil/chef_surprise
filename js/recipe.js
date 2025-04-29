import { fetchRandomRecipe } from "./api.js";
import { renderRecipe } from "./views.js";

async function init() {
  try {
    const recipe = await fetchRandomRecipe();
    renderRecipe(recipe);
  } catch (error) {
    console.log(error.message);
  }
}

init();

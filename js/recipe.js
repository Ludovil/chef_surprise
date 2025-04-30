import { fetchRandomRecipe,fetchRecipeWithId } from "./api.js";
import { renderRecipe } from "./views.js";

async function init() {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  try {
    let recipe;
    if (recipeId) {
      recipe = await fetchRecipeWithId(recipeId);
    } else {
      recipe = await fetchRandomRecipe();
    }
    renderRecipe(recipe);
  } catch (error) {
    console.log(error.message);
  }
}

init();

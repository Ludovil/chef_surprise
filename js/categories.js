import { fetchCategories } from "./api.js";
import { renderCategories } from "./views.js";

async function init() {
  try {
    const categories = await fetchCategories();
    renderCategories(categories);
  } catch (error) {
    console.log(error.message);
  }
}

init();

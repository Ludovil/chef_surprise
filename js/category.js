import { fetchListCategory } from "./api.js";
import { renderListcategory } from "./views.js";

async function init() {
  const params = new URLSearchParams(window.location.search);
  const categoryName = params.get("category");
  try {
    const category = await fetchListCategory(categoryName);
    renderListcategory(category, categoryName);
  } catch (error) {
    console.log(error.message);
  }
}

init();

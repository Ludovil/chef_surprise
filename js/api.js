export async function fetchRandomRecipe() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    const recipe = json.meals[0];
    return recipe;
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchCategories() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const categories = json.categories;
    return categories;
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchListCategory(categoryName) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
    categoryName
  )}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.meals;
  } catch (error) {
    console.error(error.message);
  }
}

export async function fetchRecipeWithId(recipeId) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json.meals[0];
  } catch (error) {
    console.error(error.message);
  }
}

console.log("api call");

export async function fetchRandomRecipe() {
  console.log("fetchrandomrecipe");
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
  console.log("fetch categories");
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

export async function fetchOneCategory() {
  console.log("fetch one category");
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const category = json.meals;
    return category;
  } catch (error) {
    console.error(error.message);
  }
}

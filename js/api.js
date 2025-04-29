console.log("api call");

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

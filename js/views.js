const recipeContainer = document.querySelector(".recipe-container");
const recipeMain = document.querySelector(".recipe-main");
const recipeInfo = document.querySelector(".recipe-info");
const recipeIngredients = document.querySelector(".recipe-ingredients");
const recipeInstructions = document.querySelector(".recipe-instructions");

export function renderRecipe(recipe) {
  console.log(recipe);

  // Title
  const recipeTitle = document.createElement("h1");
  recipeTitle.classList.add("recipe-title");
  recipeTitle.innerHTML = recipe.strMeal;
  recipeInfo.appendChild(recipeTitle);

  // Category
  const recipeCategory = document.createElement("h2");
  recipeCategory.classList.add("recipe-category");
  recipeCategory.innerHTML = recipe.strCategory;
  recipeInfo.appendChild(recipeCategory);

  // Img
  const recipeImg = document.createElement("img");
  recipeImg.classList.add("recipe-img");
  recipeImg.src = recipe.strMealThumb;
  recipeInfo.appendChild(recipeImg);

  // Tags
  const recipeStringTags = recipe.strTags;
  const recipeArrayTags = recipeStringTags ? recipeStringTags.split(",") : [];
  recipeArrayTags.forEach((element) => {
    const recipeTag = document.createElement("p");
    recipeTag.innerText = `#${element}`;
    recipeTag.classList.add("recipe-tag");
    recipeInfo.appendChild(recipeTag);
  });

  // Ingredients & Measures
  const recipeIngredientsAndMeasures = document.createElement("ul");
  recipeIngredients.appendChild(recipeIngredientsAndMeasures);

  for (let i = 1; i <= 20; i++) {
    if (recipe["strIngredient" + i] && recipe["strMeasure" + i]) {
      const liIngredient = document.createElement("li");
      liIngredient.classList.add("ingredients_measures");
      liIngredient.innerText =
        recipe["strIngredient" + i] + " - " + recipe["strMeasure" + i];
      recipeIngredientsAndMeasures.appendChild(liIngredient);
    }
  }

  // Instructions
  const instructions = document.createElement("p");
  instructions.innerHTML = recipe.strInstructions;
  recipeInstructions.appendChild(instructions);
  console.log(instructions);

  // Video
  const recipeVideoContainer = document.createElement("div");
  recipeInstructions.appendChild(recipeVideoContainer);

  const videoId = extractVideoIdFromUrl(recipe.strYoutube);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  const recipeVideo = document.createElement("iframe");
  recipeVideoContainer.appendChild(recipeVideo);
  recipeVideo.setAttribute("width", "560");
  recipeVideo.setAttribute("height", "315");
  recipeVideo.setAttribute("src", embedUrl);
  recipeVideo.setAttribute("frameborder", "0");
  recipeVideo.setAttribute("allowfullscreen", "true");

  function extractVideoIdFromUrl(url) {
    const videoIdRegex =
      /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com|\.be)\/(?:watch\?v=|embed\/|v\/)?([\w-]{11})(?:\S+)?/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  }
}

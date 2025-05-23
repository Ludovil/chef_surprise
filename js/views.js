import { fetchListCategory } from "./api.js";

const recipeContainer = document.querySelector(".recipe-container");
const recipeTitle = document.querySelector(".recipe-title");
const recipeInfo = document.querySelector(".recipe-info");
const recipeIngredients = document.querySelector(".recipe-ingredients");
const recipeInstrcutionsContainer = document.querySelector(
  ".recipe-instructions-container"
);

console.log(recipeContainer);

export function renderRecipe(recipe) {
  // Title
  recipeTitle.innerHTML = recipe.strMeal;

  // Category - Area
  const recipeCategoryAndArea = document.createElement("h2");
  recipeCategoryAndArea.classList.add("recipe-category-area");
  recipeCategoryAndArea.innerHTML = `${recipe.strCategory} - ${recipe.strArea}`;
  recipeInfo.appendChild(recipeCategoryAndArea);

  // Img
  const recipeImg = document.createElement("img");
  recipeImg.classList.add("recipe-img");
  recipeImg.src = recipe.strMealThumb;
  recipeInfo.appendChild(recipeImg);

  // Tags
  const recipeTagsContainer = document.createElement("div");
  recipeTagsContainer.classList.add("recipe-tags-container");
  recipeInfo.appendChild(recipeTagsContainer);
  const recipeStringTags = recipe.strTags;
  const recipeArrayTags = recipeStringTags ? recipeStringTags.split(",") : [];
  recipeArrayTags.forEach((element) => {
    const recipeTag = document.createElement("p");
    recipeTag.innerText = `#${element}`;
    recipeTag.classList.add("recipe-tag");
    recipeTagsContainer.appendChild(recipeTag);
  });

  // Ingredients & Measures
  const ingredientsListContainer = document.createElement("div");
  ingredientsListContainer.classList.add("ingredients-list-container");
  const recipeIngredientsAndMeasures = document.createElement("ul");

  ingredientsListContainer.appendChild(recipeIngredientsAndMeasures);
  recipeIngredients.appendChild(ingredientsListContainer);

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
  if (recipe.strInstructions) {
    const instructions = document.createElement("p");
    const formattedInstructions = recipe.strInstructions.replace(
      /\.\s/g,
      ".<br><br>"
    );
    instructions.innerHTML = formattedInstructions;
    recipeInstrcutionsContainer.appendChild(instructions);
  }

  // Video
  const recipeVideoContainer = document.createElement("div");
  recipeInstrcutionsContainer.appendChild(recipeVideoContainer);

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

const categoriesGridContainer = document.querySelector(
  ".categories-grid-container"
);

export function renderCategories(categories) {
  categoriesGridContainer.innerHTML = " ";

  categories.forEach((element) => {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add("category-card");

    const categoryImg = document.createElement("img");
    categoryImg.classList.add("category-img");
    categoryImg.src = element.strCategoryThumb;

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.innerHTML = element.strCategory;

    const categoryRandomBtn = document.createElement("button");
    categoryRandomBtn.classList.add("btn", "btn-primary");
    categoryRandomBtn.innerText = "Get Recipe";

    const categoryListBtn = document.createElement("button");
    categoryListBtn.classList.add("btn", "btn-outline");
    categoryListBtn.innerText = "List";

    categoryListBtn.addEventListener("click", async () => {
      const categoryName = element.strCategory;
      window.location.href = `category.html?category=${encodeURIComponent(
        categoryName
      )}`;
    });

    categoryRandomBtn.addEventListener("click", async () => {
      const categoryName = element.strCategory;
      const recipes = await fetchListCategory(categoryName);
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      const recipeId = randomRecipe.idMeal;
      window.location.href = `recipe.html?id=${recipeId}`;
    });

    categoryCard.appendChild(categoryImg);
    categoryCard.appendChild(categoryTitle);
    categoryCard.appendChild(categoryRandomBtn);
    categoryCard.appendChild(categoryListBtn);

    categoriesGridContainer.appendChild(categoryCard);
  });
}

const categoryListName = document.querySelector(".category-name");
const categoryGridContainer = document.querySelector(
  ".category-grid-container"
);

export function renderListcategory(category, categoryName) {
  categoryGridContainer.innerHTML = " ";
  categoryListName.innerHTML = categoryName;

  category.forEach((element) => {
    const categoryListCard = document.createElement("div");
    categoryListCard.classList.add("category-list-card");

    categoryGridContainer.appendChild(categoryListCard);

    const categoryListImg = document.createElement("img");
    categoryListImg.classList.add("category-list-img");
    categoryListImg.src = element.strMealThumb;

    categoryListCard.appendChild(categoryListImg);

    const categoryListDescription = document.createElement("h3");
    categoryListDescription.classList.add("category-list-description");
    categoryListDescription.innerHTML = element.strMeal;

    categoryListCard.appendChild(categoryListDescription);

    const getRecipeListBtn = document.createElement("button");
    getRecipeListBtn.classList.add("btn", "btn-primary");
    getRecipeListBtn.innerHTML = "Get Recipe";

    categoryListCard.appendChild(getRecipeListBtn);

    getRecipeListBtn.addEventListener("click", async () => {
      window.location.href = `recipe.html?id=${element.idMeal}`;
    });
  });
}

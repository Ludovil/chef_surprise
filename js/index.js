const getRecipeBtn = document.querySelector(".get-recipe-btn");

getRecipeBtn.addEventListener("click", () => {
  window.location.href = "recipe.html?random=true"; // pour une recette aléatoire
});

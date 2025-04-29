console.log("index.js");

const getRecipeBtn = document.querySelector(".get-recipe-btn");

getRecipeBtn.addEventListener("click", () => {
  console.log("get recipe btn");
  window.location.href = "recipe.html";
});

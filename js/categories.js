const categoriesGridContainer = document.querySelector(
  ".categories-grid-container"
);

async function fetchCategories() {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const categories = json.categories;

    renderCategories(categories);
  } catch (error) {
    console.error(error.message);
  }
}

fetchCategories();

function renderCategories(categories) {
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

    categoryCard.appendChild(categoryImg);
    categoryCard.appendChild(categoryTitle);
    categoryCard.appendChild(categoryRandomBtn);
    categoryCard.appendChild(categoryListBtn);

    categoriesGridContainer.appendChild(categoryCard);
  });
}

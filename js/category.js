import { fetchOneCategory } from "./api.js";

async function init() {
  try {
    const category = await fetchOneCategory();
    console.log("category:", category);
  } catch (error) {
    console.log(error.message);
  }
}

init();

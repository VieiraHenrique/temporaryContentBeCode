const searchForm = document.querySelector("form");
const mealsList = document.querySelector(".meals-list");
const modal = document.querySelector(".modal");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = searchForm.querySelector("input").value;

  fetchResults(searchInput);
});

const fetchResults = async (searchTerm) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );
  const { meals } = await res.json();

  displayListResults(meals);
};

const displayListResults = (meals) => {
  mealsList.innerHTML = "";
  const template = document.querySelector("template");

  if (meals) {
    meals.forEach((meal) => {
      const newItem = document.createElement("div");
      newItem.innerHTML = template.innerHTML;
      newItem.classList.add("entry");
      newItem.querySelector("b").innerText = meal.strMeal;
      newItem.querySelector("img").src = meal.strMealThumb;
      newItem.addEventListener("click", () => {
        displayModal(meal);
      });
      mealsList.appendChild(newItem);
    });
  } else {
    mealsList.innerHTML = "No results found";
  }
};

const displayModal = (meal) => {
  const ingList = modal.querySelector("ul");
  modal.classList.remove("hidden");
  console.log(meal);
  modal.querySelector("button").addEventListener("click", () => {
    modal.classList.add("hidden");
    ingList.innerHTML = "";
  });
  modal.querySelector("img").src = meal.strMealThumb;
  modal.querySelector(".modal-title").innerText = meal.strMeal;
  modal.querySelector(".modal-country").innerText = meal.strArea;
  modal.querySelector(".modal-desc").innerText = meal.strInstructions;

  const ingredientsArr = Object.entries(meal)
    .filter((el) => el[0].includes("strIngredient"))
    .filter((el) => el[1]);

  const amountsArr = Object.entries(meal)
    .filter((el) => el[0].includes("strMeasure"))
    .filter((el) => el[1]);

  const ingredientsObj = {};

  ingredientsArr.forEach((ing, i) => {
    ingredientsObj[ingredientsArr[i][1]] = amountsArr[i][1];
  });

  for (let ingredient in ingredientsObj) {
    console.log(ingredient, ingredientsObj[ingredient]);

    const newIngr = document.createElement("li");
    const ingrTempl = document.querySelector(".ingredient-template");
    newIngr.innerHTML = ingrTempl.innerHTML;

    newIngr.querySelector(".ingredient").innerText = ingredient;
    newIngr.querySelector(".ingredient-amount").innerText =
      ingredientsObj[ingredient];

    ingList.appendChild(newIngr);
  }
};

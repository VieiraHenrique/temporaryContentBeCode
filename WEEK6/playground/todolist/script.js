const mainInput = document.querySelector("#main-input");
const addBtn = document.querySelector("#addBtn");

const todosContainer = document.querySelector(".todos-container");

/* FUNCTIONS */

const refreshTodos = () => {
  todosContainer.innerHTML = "";
  const todosArrFromDB = JSON.parse(localStorage.getItem("todos"));

  todosArrFromDB.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `
    ${todo}
        <button class="delete">delete</button>
        `;
    todosContainer.appendChild(newLi);

    newLi.querySelector(".delete").addEventListener("click", () => {
      deleteTodo(todo);
    });
  });
};

const saveToDatabase = (todo) => {
  const arrFromDb = JSON.parse(localStorage.getItem("todos"));
  arrFromDb.push(todo);

  localStorage.setItem("todos", JSON.stringify(arrFromDb));
};

const deleteTodo = (todo) => {
  arrFromDb = JSON.parse(localStorage.getItem("todos"));

  newArr = arrFromDb.filter((el) => el !== todo);

  localStorage.setItem("todos", JSON.stringify(newArr));

  refreshTodos();
};

/* ACTIONS */

if (!localStorage.getItem("todos")) {
  localStorage.setItem("todos", JSON.stringify([]));
} else {
  refreshTodos();
}

addBtn.addEventListener("click", () => {
  let todo;

  if (mainInput.value.length) {
    todo = mainInput.value;
    mainInput.value = "";
    saveToDatabase(todo);
    refreshTodos();
  }
});

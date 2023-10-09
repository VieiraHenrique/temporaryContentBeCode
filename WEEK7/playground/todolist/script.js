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
    ${todo.content}
        <button class="delete">delete</button>
        `;
    todosContainer.appendChild(newLi);

    newLi.querySelector(".delete").addEventListener("click", () => {
      deleteTodo(todo.id);
    });
  });
};

const saveToDatabase = (todo) => {
  const arrFromDb = JSON.parse(localStorage.getItem("todos"));
  arrFromDb.push({ id: new Date().getTime(), content: todo });

  localStorage.setItem("todos", JSON.stringify(arrFromDb));
};

const deleteTodo = (todo) => {
  arrFromDb = JSON.parse(localStorage.getItem("todos"));

  newArr = arrFromDb.filter((el) => el.id !== todo);

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
  if (mainInput.value.length) {
    const todo = mainInput.value;
    mainInput.value = "";
    saveToDatabase(todo);
    refreshTodos();
  }
});

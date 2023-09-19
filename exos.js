/* EXERCISE WEEK 4 -18 */

/* let maxNumber = parseInt(prompt("Choose a max number"));

while (!maxNumber) {
  maxNumber = parseInt(prompt("Invalid number. Choose again"));
}

const correctNumber = Math.floor(Math.random() * maxNumber + 1);

let guess = parseInt(prompt("Make your first guess"));
let numberOfGuesses = 1;

while (guess !== correctNumber) {
  if (isNaN(guess)) {
    guess = parseInt(prompt("Invalid guess. Try again with a valid number"));
  } else {
    if (guess < correctNumber) {
      guess = parseInt(prompt("Too low. Try again"));
      numberOfGuesses++;
    } else {
      guess = parseInt(prompt("Too high. Try again"));
      numberOfGuesses++;
    }
  }
}

alert(
  `Congratulations ! ${guess} is the correct number ! That took you ${numberOfGuesses} guesses`
); */

/* EXERCISE WEEK4 - 20 */

/* window.onload = () => {
  let input = prompt("What do you want to do ?");

  const todos = [];

  while (input !== "quit") {
    // NEW
    if (input === "new") {
      console.clear();
      const newTodo = prompt("Insert your todo");
      todos.push(newTodo);
      console.log(`"${newTodo}" was added to the list`);
      input = prompt("What do you want to do ?");
    } else if (input === "list") {
      // LIST
      console.clear();
      console.log("***** TODOS ******");
      for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1} - ${todos[i]}`);
      }

      input = prompt("What do you want to do ?");
    } else if (input === "delete") {
      // DELETE
      let deleteTodoIndex = parseInt(
        prompt("What to do would you like to delete (only numbers accepted)")
      );
      if (!deleteTodoIndex) {
        deleteTodoIndex = parseInt(
          prompt(
            "Please enter a valid number. What to do would you like to delete ?"
          )
        );
      } else {
        if (todos[deleteTodoIndex - 1]) {
          console.log(
            `${todos[deleteTodoIndex - 1]} was removed from the list`
          );
          todos.splice(deleteTodoIndex - 1, 1);
          input = prompt("What do you want to do ?");
        } else {
          input = prompt(
            "There is no such task. Operation aborted. What do you want to do ?"
          );
        }
      }
    } // NOT VALID
    else {
      input = prompt("Command not valid. What do you want to do ?");
    }
  }
};
 */

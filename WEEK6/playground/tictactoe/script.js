const board = document.querySelector(".board");
const msg = document.querySelector(".message");
const restartBtn = document.querySelector(".restart");

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "x";
let isGameOver = false;
const playedCells = [];

const startGame = () => {
  reset();
  play();
};

const reset = () => {
  isGameOver = false;
  // Reset board layout from previous game
  board.innerHTML = "";
  // Create board layout
  for (let i = 0; i < 9; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.dataset.index = i;
    board.appendChild(newCell);
  }
  // Reset playedCells
  playedCells.length = 0;
  for (let i = 0; i < 9; i++) {
    playedCells.push("");
  }
  msg.innerText = `It's ${currentPlayer}'s turn`;
};

const play = () => {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
};

const handleClick = (e) => {
  const cell = e.target;
  const index = cell.dataset.index;
  cell.innerText = currentPlayer;
  playedCells[index] = currentPlayer;

  cell.removeEventListener("click", handleClick);

  checkForWin();

  if (!isGameOver) {
    swapPlayer();
  }
};

const checkForWin = () => {
  winCombinations.forEach((combination) => {
    if (
      playedCells[combination[0]] === currentPlayer &&
      playedCells[combination[1]] === currentPlayer &&
      playedCells[combination[2]] === currentPlayer
    ) {
      msg.innerText = `${currentPlayer} wins !`;
      gameOver();
    }
  });
};

const gameOver = () => {
  isGameOver = true;
  document
    .querySelectorAll(".cell")
    .forEach((cell) => cell.removeEventListener("click", handleClick));
};

const swapPlayer = () => {
  currentPlayer === "x" ? (currentPlayer = "o") : (currentPlayer = "x");
  msg.innerText = `It's ${currentPlayer}'s turn`;
};

restartBtn.addEventListener("click", startGame);

startGame();

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

const playedCells = [];
let currentPlayer = "x";
let isGameOver;

const startGame = () => {
  board.innerHTML = "";
  isGameOver = false;
  playedCells.length = 0;
  for (let i = 0; i < 9; i++) {
    playedCells.push("");
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    board.appendChild(cell);
  }
  document
    .querySelectorAll(".cell")
    .forEach((cell) => cell.addEventListener("click", handleClick));
  msg.innerHTML = `It's <b>${currentPlayer}</b>'s turn`;
};

const handleClick = (e) => {
  const currentCell = e.target;
  currentCell.removeEventListener("click", handleClick);
  const index = currentCell.dataset.index;
  playedCells[index] = currentPlayer;
  currentCell.innerText = currentPlayer;
  currentCell.style.cursor = "not-allowed";
  checkWinner();
  if (!isGameOver) {
    swapPlayer();
  }
};

const checkWinner = () => {
  winCombinations.forEach((combi) => {
    if (
      playedCells[combi[0]] === currentPlayer &&
      playedCells[combi[1]] === currentPlayer &&
      playedCells[combi[2]] === currentPlayer
    ) {
      isGameOver = true;
      stopGame();
    }
  });
};

const swapPlayer = () => {
  currentPlayer === "x" ? (currentPlayer = "o") : (currentPlayer = "x");
  msg.innerHTML = `It's <b>${currentPlayer}</b>'s turn`;
};

const stopGame = () => {
  isGameOver = true;
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.removeEventListener("click", handleClick);
    cell.style.cursor = "not-allowed";
    msg.innerHTML = `${currentPlayer} WINS!`;
  });
};

startGame();

restartBtn.addEventListener("click", startGame);

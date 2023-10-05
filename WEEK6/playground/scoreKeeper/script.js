const P1 = document.querySelector(".P1");
const P2 = document.querySelector(".P2");
const reset = document.querySelector(".reset");

let P1score = 0;
let P2score = 0;
let isGameOver = false;

const updateScore = () => {
  P1.innerText = P1score;
  P2.innerText = P2score;
};

const checkIsGameOver = () => {
  if (P1score + P2score === 5) {
    isGameOver = true;
    if (P1score > P2score) {
      P1.style.color = "green";
      P2.style.color = "red";
    } else {
      P1.style.color = "red";
      P2.style.color = "green";
    }
  }
};

document.addEventListener("click", (e) => {
  if (e.target.matches(".btnP1")) {
    if (!isGameOver) {
      P1score++;
      updateScore();
      checkIsGameOver();
    }
  }

  if (e.target.matches(".btnP2")) {
    if (!isGameOver) {
      P2score++;
      updateScore();
      checkIsGameOver();
    }
  }

  if (e.target.matches(".reset")) {
    if (isGameOver) {
      P1score = 0;
      P2score = 0;
      updateScore();
      isGameOver = false;
      P1.style.color = "black";
      P2.style.color = "black";
    }
  }
});

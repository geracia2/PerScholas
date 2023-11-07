// define that there are two players, player 1 and player 2
// player 1 = X
// player 2 = O
// on first click place an X in corresponding box
// on 2nd click place an O in corresponding box

// how to win
// row 1 2 3
// row 4 5 6
// row 7 8 9 - aar
// col 1 4 7 - aaron
// col 2 5 8 - caleb
// col 3 6 9 - caleb
// dig 1 5 9 - Jordan
// dig 3 5 7 - Jordan

let cells = document.querySelectorAll(".boxes");
let board = document.querySelector(".parent");

let currentPlayer = true;
let gameOver = false;
let winningPlayer = "";

// winning with Ifs
let checkWinner = function () {
  // if (cells[0].innerHTML === cells[1].innerHTML && cells[2].innerHTML)
  if (
    // row 1 2 3
    cells[0].innerText === "X" &&
    cells[1].innerText === "X" &&
    cells[2].innerText === "X"
  ) {
    console.log("Winner is Player 1");
    winningPlayer = "Player 1";
    gameOver = true;
  } else if (
    // row 1 2 3
    cells[0].innerText === "O" &&
    cells[1].innerText === "O" &&
    cells[2].innerText === "O"
  ) {
    console.log("Winner is Player 2");
    winningPlayer = "Player 2";
    gameOver = true;
  } else if (
    // row 4 5 6
    cells[3].innerText === "X" &&
    cells[4].innerText === "X" &&
    cells[5].innerText === "X"
  ) {
    console.log("Winner is Player 1");
    winningPlayer = "Player 1";
    gameOver = true;
  } else if (
    // row 4 5 6
    cells[3].innerText === "O" &&
    cells[4].innerText === "O" &&
    cells[5].innerText === "O"
  ) {
    console.log("Winner is Player 2");
    winningPlayer = "Player 2";
    gameOver = true;
  } else if (
    // row 7 8 9
    cells[6].innerText === "O" &&
    cells[7].innerText === "O" &&
    cells[8].innerText === "O"
  ) {
    console.log("Winner is Player 2");
    winningPlayer = "Player 2";
    gameOver = true;
  } else if (
    // row 7 8 9
    cells[6].innerText === "X" &&
    cells[7].innerText === "X" &&
    cells[8].innerText === "X"
  ) {
    console.log("Winner is Player 1");
    winningPlayer = "Player 1";
    gameOver = true;
  } else if (
    // dia 1 5 9
    cells[0].innerText === "X" &&
    cells[4].innerText === "X" &&
    cells[8].innerText === "X"
  ) {
    console.log("Winner is Player 1");
    winningPlayer = "Player 1";
    gameOver = true;
  } else if (
    cells[0].innerText === "O" &&
    cells[4].innerText === "O" &&
    cells[8].innerText === "O"
  ) {
    console.log("Winner is Player 2");
    winningPlayer = "Player 2";
    gameOver = true;
    } else if (
    // dia 3 5 7
    cells[2].innerText === "X" &&
    cells[4].innerText === "X" &&
    cells[6].innerText === "X"
  ) {
    console.log("Winner is Player 1");
    winningPlayer = "Player 1";
    gameOver = true;
  } else if (
    // dia 3 5 7
    cells[2].innerText === "O" &&
    cells[4].innerText === "O" &&
    cells[6].innerText === "O"
  ) {
    console.log("Winner is Player 2");
    winningPlayer = "Player 2";
    gameOver = true;
  } else if (
    // col 1 4 7
    cells[0].innerText === "X" &&
    cells[3].innerText === "X" &&
    cells[6].innerText === "X"
  ) {
    console.log("Winner is Player 1");
    winningPlayer = "Player 1";
    gameOver = true;
  } else if (
    // col 1 4 7
    cells[0].innerText === "O" &&
    cells[3].innerText === "O" &&
    cells[6].innerText === "O"
  ) {
    console.log("Winner is Player 2");
    winningPlayer = "Player 2";
    gameOver = true;
  } else if (
    // col 2 5 8
    cells[1].innerText === "X" &&
    cells[4].innerText === "X" &&
    cells[7].innerText === "X"
  ) {
    console.log("Winner is Player 1");
    winningPlayer = "Player 1";
    gameOver = true;
  } else if (
    // col 2 5 8
    cells[1].innerText === "O" &&
    cells[4].innerText === "O" &&
    cells[7].innerText === "O"
  ) {
    console.log("Winner is Player 2");
    winningPlayer = "Player 2";
    gameOver = true;
  } else if (
    // col 3 6 9
    cells[2].innerText === "O" &&
    cells[5].innerText === "O" &&
    cells[8].innerText === "O"
  ) {
    console.log("Winner is Player 2");
    winningPlayer = "Player 2";
    gameOver = true;
  } else if (
    // col 3 6 9
    cells[2].innerText === "X" &&
    cells[5].innerText === "X" &&
    cells[8].innerText === "X"
  ) {
    console.log("Winner is Player 1");
    winningPlayer = "Player 1";
    gameOver = true;
  } else {
    gameIsDraw();
  }
};

// Reset
let resetGame = function () {
  for (let cell of cells) {
    cell.innerHTML = "";
  }
  gameOver = false;
  currentPlayer = true;
};

// Draw
let gameIsDraw = function () {
  setTimeout(() => {
    alert(`This game is a draw`);
    resetGame();
  }, 200);
};

// Delegated event listener on the board
board.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("boxes")) {
    // skip clicking the board if target is not boxes
    return;
  }
  if (currentPlayer && evt.target.innerHTML === "") {
    // true/false palyer and empty cell are true? check logic?
    evt.target.innerHTML = "<h2>X</h2>";
    currentPlayer = false;
  } else if (!currentPlayer && evt.target.innerHTML === "") {
    evt.target.innerHTML = "<h2>O</h2>";
    currentPlayer = true;
  } else {
    return;
  }
  checkWinner();
  if (gameOver) {
    setTimeout(() => {
      alert(`Winner is ${winningPlayer}`);
      resetGame();
    }, 200);
  }
});

board.getContext()

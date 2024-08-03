let overlay = document.querySelector(".overlay"),
  popupWinner = document.querySelector(".popup-winner"),
  cardGame = document.querySelectorAll(".cardGame"),
  reset = document.querySelector(".reset"),
  quit = document.querySelector(".quit"),
  nextRound = document.querySelector(".nextRound"),
  removeTimeout,
  turn = "x",
  squares = [];

// Set Game
cardGame.forEach((card) => {
  card.addEventListener("click", () => {
    card.innerHTML = turn;
    card.classList.add("no-clicking");
    if (turn === "x") {
      turn = "o";
    } else {
      turn = "x";
    }
    document.querySelector(".turn span").innerHTML = turn;
    checkOut();
  });
});

// Check Out Of The Game
function checkOut() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("card_" + i).innerHTML;
  }

  if (
    squares[1] === squares[2] &&
    squares[2] === squares[3] &&
    squares[1] != ""
  ) {
    win(1, 2, 3);
  } else if (
    squares[4] === squares[5] &&
    squares[5] === squares[6] &&
    squares[4] != ""
  ) {
    win(4, 5, 6);
  } else if (
    squares[7] === squares[8] &&
    squares[8] === squares[9] &&
    squares[7] != ""
  ) {
    win(7, 8, 9);
  } else if (
    squares[1] === squares[4] &&
    squares[4] === squares[7] &&
    squares[1] != ""
  ) {
    win(1, 4, 7);
  } else if (
    squares[2] === squares[5] &&
    squares[5] === squares[8] &&
    squares[2] != ""
  ) {
    win(2, 5, 8);
  } else if (
    squares[3] === squares[6] &&
    squares[6] === squares[9] &&
    squares[3] != ""
  ) {
    win(3, 6, 9);
  } else if (
    squares[1] === squares[5] &&
    squares[5] === squares[9] &&
    squares[1] != ""
  ) {
    win(1, 5, 9);
  } else if (
    squares[3] === squares[5] &&
    squares[5] === squares[7] &&
    squares[3] != ""
  ) {
    win(3, 5, 7);
  }
}

// Check Out Of The Win
function win(card1, card2, card3) {
  document.getElementById(`card_${card1}`).classList.add("active");
  document.getElementById(`card_${card2}`).classList.add("active");
  document.getElementById(`card_${card3}`).classList.add("active");
  overlay.style.display = "block";
  popupWinner.classList.add("active");
  document.querySelector(".popup-winner .title span").innerHTML =
    document.getElementById(`card_${card1}`).innerHTML;
}

// Reset The Game
function resetGame() {
  cardGame.forEach((card) => {
    turn = "x";
    card.innerHTML = "";
    card.classList.remove("no-clicking");
    card.classList.remove("active");
    document.querySelector(".turn span").innerHTML = turn;
    clearTimeout(removeTimeout);
  });
}

reset.addEventListener("click", resetGame);

quit.addEventListener("click", () => {
  overlay.style.display = "none";
  popupWinner.classList.remove("active");
  cardGame.forEach((card) => {
    card.classList.add("no-clicking");
  });

  removeTimeout = setTimeout(() => {
    resetGame();
  }, 4000);
});

nextRound.addEventListener("click", () => {
  overlay.style.display = "none";
  popupWinner.classList.remove("active");
  resetGame();
});

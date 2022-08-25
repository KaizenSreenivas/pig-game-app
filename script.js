'use strict';

const score0El = document.getElementById('score--0');
const score1E2 = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');

//setting default values

score0El.textContent = 0;
score1E2.textContent = 0;
diceElement.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
// rolling the dice

const swithcPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollTheDice = function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // check for dice is 1
    if (dice !== 1) {
      // Add dice to current score .
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swithcPlayer();
    }
  }
};

const holdDice = function () {
  if (playing) {
    scores[activePlayer] += currentScore; //scores[1]=scores[1]+currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player-active');
      diceElement.classList.add('hidden');
    } else {
      swithcPlayer();
    }
  }
};

const resetTheGame = function () {
  score0El.textContent = 0;
  score1E2.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  diceElement.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--active');
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
};

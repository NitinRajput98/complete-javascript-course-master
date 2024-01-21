'use strict';
// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const swtichPlayer = function () {
  currentScore = 0;
  (activePlayer === 0 ? current0El : current1El).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Initializing state variables
let scores, currentScore, activePlayer, playing;
// Starting Conditions
const init = function () {
  // Initialization function
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

// Rolling the dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      (activePlayer === 0 ? current0El : current1El).textContent = currentScore;
    } else {
      // Switch to next player
      swtichPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    (activePlayer === 0 ? score0El : score1El).textContent =
      scores[activePlayer];
    //2. Check if player's score is >=100
    //Finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      (activePlayer === 0 ? player0El : player1El).classList.add(
        'player--winner'
      );
      (activePlayer === 0 ? player0El : player1El).classList.remove(
        'player--active'
      );
    } else {
      //Switch to the next player
      swtichPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

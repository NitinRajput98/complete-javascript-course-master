'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

// Project #1
const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;
// To check if user already won the game
let userWon = false;

// To check if guess > secretNumber or guess < secretNumber
function guessHighOrLow(guess) {
  if (score > 1) {
    // document.querySelector('.message').textContent =
    //   guess > secretNumber ? '📈Too High!' : '📉Too Low!';
    displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
    score--;
    // document.querySelector('.score').textContent = score;
    displayScore(score);
  } else {
    // document.querySelector('.message').textContent = '💥You lost the game!';
    displayMessage('💥You lost the game!');
    // document.querySelector('.score').textContent = 0;
    displayScore(0);
  }
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!userWon && guess >= 0 && guess <= 20) {
    // When there is no input
    if (!guess) {
      //   document.querySelector('.message').textContent = '⛔ No number!';
      displayMessage('⛔ No number!');
      // When user wins
    } else if (guess === secretNumber) {
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      //   document.querySelector('.message').textContent = '🎉 Correct Number!';
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      userWon = true;

      // When guess is too high!
    } else if (guess !== secretNumber) {
      guessHighOrLow(guess);
    }
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // When guess is too low!
    // } else if (guess < secretNumber) {
    //   guessHighOrLow(guess);
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📉Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  } else {
    // document.querySelector('.message').textContent =
    //   'You have won already!🏆Pls Press again to play more!▶️';
    displayMessage(
      !(guess >= 0 && guess <= 20)
        ? 'Pls input a number between 0 & 20🙂🔢'
        : 'You have won already!🏆Pls Press again to play more!▶️'
    );
  }
});

document.querySelector('.again').addEventListener('click', function () {
  userWon = false;
  score = 20;
  secretNumber = generateSecretNumber();
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //   document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

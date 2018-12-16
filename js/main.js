
var switchValue = 0; 

let turnTotal = 0;

// player defaults
const players = [
   {
      player: 'PLAYER ONE',
      score: 0
   },
   {
      player: 'PLAYER TWO',
      score: 0
   }
];



function rollDice() {

   var rollValue = (Math.ceil(Math.random() * 6));

   //condition to switch the dice image according rollvalue
   switch (rollValue) {
      case 1:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice1.png" alt="dice image" onclick="rollDice()">`);
      break;
      case 2:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice2.png" alt="dice image" onclick="rollDice()">`);
      break;
      case 3:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice3.png" alt="dice image" onclick="rollDice()">`);
      break;
      case 4:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice4.png" alt="dice image" onclick="rollDice()">`);
      break;
      case 5:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice5.png" alt="dice image" onclick="rollDice()">`);
      break;
      case 6:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice6.png" alt="dice image" onclick="rollDice()">`);
      break;
   }

   if (switchValue === 0) {
      $('#current-roll').html(`${rollValue}`);

      if (rollValue !== 1) {
         turnTotal += rollValue;
      } else {
         turnTotal = 0;
         hold();
      }

      $('#turn-total').html(`${turnTotal}`);
   } else {
      $('#current-roll2').html(`${rollValue}`);

      if (rollValue !== 1) {
         turnTotal += rollValue;
      } else {
         turnTotal = 0;
         hold();
      }

      $('#turn-total2').html(`${turnTotal}`);
   }

}

function hold() {
   
   switchValue ^= 1;

   currentPlayer = players[switchValue];
   currentPlayer.score += turnTotal;

   turnTotal = 0;
   rollValue = 0;

   if (switchValue === 0) {
      $('#total-score2').html(`${currentPlayer.score}`);
      turnTotal = 0;
      rollValue = 0;
   } else {
      $('#total-score').html(`${currentPlayer.score}`);
      turnTotal = 0;
      rollValue = 0;
   }

   endGame();
}

let playerOne = players[1];
let playerTwo = players[0];

// variable to store the winning score of the gamers
let winningScore = 0;

function newGame() {
   
   playerOne.player = $('#player1').val();
   playerTwo.player = $('#player2').val();

   if (playerOne.player === '') {
      playerOne.player = 'Player One';
   }

   if (playerTwo.player === '') {
      playerTwo.player = 'Player Two';
   }

   $('#playername').html(`${playerOne.player}`);
   $('#playername2').html(`${playerTwo.player}`);

   var winScore = $('#winning-score').val();

   if (winScore === '') {
      winningScore = 30;
   } else {
      winningScore = parseInt(winScore);
   }



   switchValue = 0;

}


function endGame() {

   if (playerOne.score >= winningScore) {
      $('.player-panel').hide();
      $('.left-panel').html(`<h1 class="winner">${playerOne.player} won the game!<h1>`);
   } else if (playerTwo.score >= winningScore) {
      $('.player-panel').hide();
      $('.right-panel').html(`<h1 class="winner">${playerTwo.player} won the game!<h1>`);
   }

   $('.dice-img').hide();

}
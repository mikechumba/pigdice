
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

//this code just puts out placeholder values
$('#total-score').html(`${players[0].score}`);
$('#total-score2').html(`${players[1].score}`);
$('#dice-image').html(`<img class="dice-img" src="images/dice/dice1.png" alt="dice image" onclick="rollDice()">`);

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

}

let playerOne = players[0];
let playerTwo = players[1];

// variable to store the winning score of the gamers
let winningScore;

function newGame() {
   
   playerOne.player = $('#player1').val();
   playerTwo.player = $('#player2').val();

   $('#playername').html(`${playerOne.player}`);
   $('#playername2').html(`${playerTwo.player}`);

   winningScore = parseInt($('#winning-score').val());

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

}
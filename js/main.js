

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
$('#dice-image').html(`<img class="dice-img" src="images/dice/dice1.png" alt="dice image">`);

function rollDice() {

   var rollValue = (Math.ceil(Math.random() * 6));

   //condition to switch the dice image according rollvalue
   switch (rollValue) {
      case 1:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice1.png" alt="dice image">`).;
      break;
      case 2:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice2.png" alt="dice image">`);
      break;
      case 3:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice3.png" alt="dice image">`);
      break;
      case 4:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice4.png" alt="dice image">`);
      break;
      case 5:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice5.png" alt="dice image">`);
      break;
      case 6:
      $('#dice-image').html(`<img class="dice-img" src="images/dice/dice6.png" alt="dice image">`);
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

var switchValue = 0;

function hold() {
   
   switchValue ^= 1;

   currentPlayer = players[switchValue];
   currentPlayer.score += turnTotal;

   turnTotal = 0;
   rollValue = 0;

   if (switchValue === 0) {
      $('#total-score2').html(`${currentPlayer.score}`);
   } else {
      $('#total-score').html(`${currentPlayer.score}`);
   }

}


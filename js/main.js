

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

function rollDice() {

   var rollValue = (Math.ceil(Math.random() * 6));

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


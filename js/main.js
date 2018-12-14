

let turnTotal = 0;

// player defaults
const players = [
   {
      player: 'PLAYER ONE',
      totalScore: 0
   },
   {
      player: 'PLAYER TWO',
      totalScore: 0;
   }
]

function rollDice() {

   var rollValue = (Math.ceil(Math.random() * 6));

   $('#current-roll').html(`${rollValue}`);

   if (rollValue !== 1) {
      turnTotal += rollValue;
   } else {
      turnTotal = 0;
      hold();
   }

   $('#turn-total').html(`${turnTotal}`);

}

var switchValue = 0;

function hold() {
   
   switchValue ^= 1;

   totalScore[switchValue] += turnTotal;

   turnTotal = 0;
   rollValue = 0;
}


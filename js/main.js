

let score = 0;

function rollDice() {

   var rollValue = (Math.ceil(Math.random() * 6));

   $('#current-roll').html(`${rollValue}`);

   if (rollValue !== 1) {
      score += rollValue;
   } else {
      score = 0;
   }

   $('#turn-total').html(`${score}`);

}

function hold() {
   
   switchValue ^= 1;


}
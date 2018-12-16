$('#start-game').click( function(){
   $('.left-panel').show();
 
   $('.right-panel').show();
   $('.input').hide();

   $('body').removeClass('page-color');   

   $('#new-btn').show();

   newGame();

});

//this code just puts out placeholder values
$('#total-score').html(`${players[0].score}`);
$('#total-score2').html(`${players[1].score}`);
$('#dice-image').html(`<img class="dice-img" src="images/dice/dice1.png" alt="dice image" onclick="rollDice()">`);

$('#roll').click( function(){
   
   rollDice();

   $('.dice-img').show();

   $('#turn1').hide();
   $('#turn2').hide();

});

$('#hold').click( function(){

   hold();

});

$('#new-btn').click( function(){
   location.reload();

});

$('#game-rules').click( function(){
   
   $('.input').hide();
   $('#rules').show();

});

$('#back').click( function(){
   location.reload();

});



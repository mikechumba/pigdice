$('#start-game').click( function(){
   $('.left-panel').show();
 
  $('.right-panel').show();
   $('.input').hide();

   $('body').removeClass('page-color');   

   $('#new-btn').show();

   newGame();

});

$('#roll').click( function(){
   $('.dice-img').show();

   rollDice();

});

$('#hold').click( function(){
   
   // if(currentPlayer === 0) {
   //    $('.left-panel.player-panel').addClass('.panel-inactive');
   // }

   hold();

});

$('#new-btn').click( function(){
   location.reload();

});

currentGamer = player[switchValue];

$(currentGamer.score).change(function() {
   endGame();
 });

// if (playerOne.score >= winningScore) {
//    $('.player-panel').hide();
//    $('.left-panel').html(`<h1 class="winner">${playerOne.player} won the game!<h1>`);
// } else if (playerTwo.score >= winningScore) {
//    $('.player-panel').hide();
//    $('.right-panel').html(`<h1 class="winner">${playerOne.player} won the game!<h1>`);
// }



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

if(switchValue === 1 || rollValue === 1) {
   $('.left-panel').css('background-color', '#80475e');
   $('.right-panel').css('background-color', '#fff05a');
   $('#total-score2, #turn-total2, #current-roll2, ').css('color', '#80475e');
   $('#total-score, #turn-total, #current-roll').css('color', '#fff05a');
} else if(switchValue === 0 || rollValue === 1) {
   $('.left-panel').css('background-color', '#fff05a');
   $('.right-panel').css('background-color', '#80475e');
   $('#total-score, #turn-total, #current-roll').css('color', '#80475e');
   $('#total-score2, #turn-total2, #current-roll2').css('color', '#fff05a');
}

$('#hold').click( function(){

   hold();

});

$('#new-btn').click( function(){
   location.reload();

});


// if (playerOne.score >= winningScore) {
//    $('.player-panel').hide();
//    $('.left-panel').html(`<h1 class="winner">${playerOne.player} won the game!<h1>`);
// } else if (playerTwo.score >= winningScore) {
//    $('.player-panel').hide();
//    $('.right-panel').html(`<h1 class="winner">${playerOne.player} won the game!<h1>`);
// }



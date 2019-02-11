/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, playerScore;

roundScore0 = 0;
roundScore1 = 0;
activePlayer = 0;
playerScore0 = 0;
playerScore1 = 0;




document.querySelector('.dice').style.display = 'none';
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;



//document.querySelector('#score-' + pl).innerHTML = '<em> dice <em>';
//var x = document.querySelector('#score-0').textContent;


document.querySelector('.btn-roll').addEventListener('click', rollDice);
document.querySelector('.btn-hold').addEventListener('click', holdDice);


function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  if (dice == 1) {
    stopDice();
  } else if (dice != 1) {
    diceScore(activePlayer, dice);
  }
}


function diceScore(plyr, dce) {
  if (plyr == 0) {
    roundScore0 += dce;
    document.querySelector('#current-0').textContent = roundScore0;
  } else {
    roundScore1 += dce;
    document.querySelector('#current-1').textContent = roundScore1;
  }

}


function holdDice() {
  if (activePlayer == 0) {
    playerScore0 += roundScore0;
    if (playerScore0 == 100) {

    }
    document.querySelector('#score-0').textContent = playerScore0;
  } else {
    playerScore1 += roundScore1;
    document.querySelector('#score-1').textContent = playerScore1;
  }

  roundScore0 = 0;
  roundScore1 = 0;
  playerChange();
}

function stopDice() {
  roundScore0 = 0;
  roundScore1 = 0;
  playerChange();
}


function playerChange() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}


//document.querySelector('#score-0').textContent = ;

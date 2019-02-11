/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//document.querySelector('#score-' + pl).innerHTML = '<em> dice <em>';
//var x = document.querySelector('#score-0').textContent;
//document.querySelector('#score-0').textContent = ;


var scores, roundScore, activePlayer, gamePlaying, temp = 0, val1 = 0, val2 = 0, state1, state2, tempState = 2, dice;

gameInit();


document.querySelector('.btn-roll').addEventListener('click', function () {
  if (gamePlaying) {
    //Random number
    dice = Math.floor(Math.random() * 6) + 1;
    //Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    console.log(dice);


    if (dice > 1) {
      roundScore += dice;
      displayRoundScore();
      checkDoubleSix(dice);
    } else {
      //toggle player
      toggleActivePlayer();
    }
  }
});

function toggleActivePlayer() {
  roundScore = 0;
  displayRoundScore();
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  document.querySelector('.dice').style.display = 'none';
  if (dice == 1) {
    document.querySelector('.btn-alert').style.display = 'block';
  }
  checkWinner();
  if (gamePlaying) {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.querySelector('.btn-continue').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';

  }
}


document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    calculateScores();
    toggleActivePlayer();
  }
})

document.querySelector('.btn-continue').addEventListener('click', function () {
  if (gamePlaying) {
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-continue').style.display = 'none';
    document.querySelector('.btn-alert').style.display = 'none';
  }
})

function calculateScores() {
  scores[activePlayer] += roundScore;
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

}

function checkDoubleSix(dice) {
  state1 = activePlayer;
  state2 = tempState;
  tempState = state1;
  val1 = dice;
  val2 = temp;
  temp = val1;
  if (val1 == 6 && val2 == 6 && state1 == state2) {
    document.querySelector('.btn-alert').style.display = 'block';
    toggleActivePlayer();
  }
}

function displayRoundScore() {
  document.getElementById('current-' + activePlayer).textContent = roundScore;
}

function checkWinner() {
  if (scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
  } else {

  }
}


document.querySelector('.btn-new').addEventListener('click', gameInit);


function gameInit() {
  gamePlaying = true;
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner', 'active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.btn-continue').style.display = 'none';
  document.querySelector('.btn-hold').style.display = 'block';
  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-alert').style.display = 'none';
}







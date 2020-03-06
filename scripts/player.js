class Player1 {
  constructor() {
    this.chooseHand = '';
    // choosePick(){}
  }
}

class Player2 {
  constructor() {
    this.chooseHand = '';
  }
  // choosePick(){
  // }
}

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'a':
      console.log('Player 1 choose rock');
      game.currentPlayer.chooseHand = 'a';
      break;
    case 's':
      console.log('Player 1 choose scissors');
      game.currentPlayer.chooseHand = 's';
      break;
    case 'd':
      console.log('Player 1 choose paper');
      game.currentPlayer.chooseHand = 'd';
      break;
  }
});

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'j':
      console.log('Player 2 choose rock');
      game.computer.chooseHand = 'j';
    game.checkWhoWonTurn();
      break;
    case 'k':
      console.log('Player 2 choose scissors');
      game.computer.chooseHand = 'k';
      game.checkWhoWonTurn();
      break;
    case 'l':
      console.log('Player 2 choose paper');
      game.computer.chooseHand = 'l';
      game.checkWhoWonTurn();
      break;
  }
});

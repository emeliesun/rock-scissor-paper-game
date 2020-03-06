  var $winner = document.getElementById('winnerReveal');
  var $setWinner = document.getElementById('SetWinnerReveal');
  var startModal = document.getElementById('screenpageModal');
  var startButton = document.getElementById('StartButton');
  startButton.addEventListener('click', function() {
    startModal.style.display = 'none';
  });

class Game {
  constructor() {
    this.user = new Player1();
    this.currentPlayer = this.user;
    this.computer = new Player2();
    this.scoreboard = new Scoreboard();
  }

  insertFirstPage() {
    startModal.style.display = 'block';
  }

  startGame() {
    setInterval(() => {
      renderEverything();
    }, 100);
  }

  checkWhoWonTurn() {
    if (
      (this.currentPlayer.chooseHand === 'a' &&
        this.computer.chooseHand === 'k') ||
      (this.currentPlayer.chooseHand === 's' &&
        this.computer.chooseHand === 'l') ||
      (this.currentPlayer.chooseHand === 'd' &&
        this.computer.chooseHand === 'j')
    ) {
      console.log('Player 1 wins!');
      this.scoreboard.userScore++;
      this.checkWinner();
      this.currentPlayer.chooseHand = '';
      this.computer.chooseHand = '';
      $setWinner.innerHTML = `Player 1`;
      this.updategametest();
    } else if (
      (this.currentPlayer.chooseHand === 'a' &&
        this.computer.chooseHand === 'l') ||
      (this.currentPlayer.chooseHand === 's' &&
        this.computer.chooseHand === 'j') ||
      (this.currentPlayer.chooseHand === 'd' &&
        this.computer.chooseHand === 'k')
    ) {
      console.log('Player 2 wins!');
      this.scoreboard.compScore++;
      this.checkWinner();
      this.currentPlayer.chooseHand = '';
      this.computer.chooseHand = '';
       $setWinner.innerHTML = `Player 2 `;
       this.updategametest();
    } else if (
      (this.currentPlayer.chooseHand === 'a' &&
        this.computer.chooseHand === 'j') ||
      (this.currentPlayer.chooseHand === 's' &&
        this.computer.chooseHand === 'k') ||
      (this.currentPlayer.chooseHand === 'd' &&
        this.computer.chooseHand === 'l')
    ) {
      console.log("It's a draw. Play again!");
      this.currentPlayer.chooseHand = '';
      this.computer.chooseHand = '';
    }
  }

  updategametest(){
    var setModal = document.getElementById('revealSetWinner');
    setModal.style.display = 'block';

    window.onclick = function(event) {
    setModal.style.display = 'none';
    setModal.setAttribute('class', 'modal notVisible');
    };

    var contBtn = document.getElementsByClassName('conBtn');

    contBtn.onclick = function(event) {
    setModal.style.display = 'none';
    setModal.setAttribute('class', 'modal notVisible');
    }
}

  checkWinner() {
      if (this.scoreboard.userScore === 3) {
        $winner.innerHTML = `Player 1 won this game!`;
        this.endgameModal();
        this.resetGame();
      } else if (this.scoreboard.compScore === 3) {
        $winner.innerHTML = `Player 2 won this game!`;
        this.endgameModal();
        this.resetGame();
      }
  }

  endgameModal() {
    var modal = document.getElementById('winnerRevealModal');
    modal.style.display = 'block';

    window.onclick = function(event) {
      modal.style.display = 'none';
      modal.setAttribute('class', 'modal notVisible');
    };

    var yesbtn = document.getElementById('yesBtn');
    var nobtn = document.getElementById('noBtn');

    yesbtn.onclick = function(event) {
      modal.style.display = 'none';
      game.resetGame();
      modal.setAttribute('class', 'modal notVisible');
    };

    nobtn.onclick = function(event) {
      modal.style.display = 'none';
      game.insertFirstPage();
      modal.setAttribute('class', 'modal notVisible');
    };
  }

  resetGame() {
    this.scoreboard.userScore = 0;
    this.scoreboard.compScore = 0;
  }
}

var game = new Game();
game.startGame();

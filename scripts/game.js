class Game {
  constructor() {
    this.user = new Player1();
    this.currentPlayer = this.user;
    this.computer = new Player2();
    this.scoreboard = new Scoreboard();
  }

  insertFirstPage() {
    var modal = document.getElementById('screenpageModal');
    modal.classList.remove('notVisible');
    modal.style.display = 'block';
    var span = document.getElementsByClassName('close2')[0];

    span.onclick = function() {
      modal.style.display = 'none';
      modal.setAttribute('class', ' modal notVisible');
    };

    // window.onclick = function(event) {
    //   modal.style.display = 'none';
    //   modal.setAttribute('class', 'modal notVisible');
    // };a

    var startButton = document.getElementById('StartButton');

      startButton.onclick = function(event) {
      modal.style.display = 'none';
      modal.setAttribute('class', 'modal notVisible');
    };
  }

  startGame() {
    this.insertFirstPage();
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
      // this.renderPick();
      this.checkWinner();
      this.currentPlayer.chooseHand = '';
      this.computer.chooseHand = '';
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

  renderPick(){
    setInterval(() => {
   if (this.scoreboard.userScore++) {
     alert('player 1 won');
   } else if (this.scoreboard.compScore++) {
     alert('player 2 won');
   }
    }, 100)
  }

  checkWinner() {
    // setTimeout(() => {
      if (this.scoreboard.userScore === 3) {
        this.endgame();
        this.resetGame();
      } else if (this.scoreboard.compScore === 3) {
        this.endgame();
        this.resetGame();
      }
    // },);
  }

  endgame() {
    var modal = document.getElementById('winnerRevealModal');
    // modal.classList.remove('notVisible');
    modal.style.display = 'block';
    var span = document.getElementsByClassName('close')[0];

    span.onclick = function() {
      modal.style.display = 'none';
      modal.setAttribute('class', ' modal notVisible');
    };

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

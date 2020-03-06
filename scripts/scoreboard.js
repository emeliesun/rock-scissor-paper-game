let scoreDiv = document.getElementsByClassName("scorecount");
let scoreH1 = document.getElementById('scoreNumber');
let winner = document.getElementById('winnerReveal');

class Scoreboard {
    constructor(){
        this.userScore = 0;
        this.compScore = 0;
    }
    renderScoreboard(){
        if (game.scoreboard.userScore === 3){
            winner.innerHTML = `Congratulations Player 1! You won the game!`;
        }else if (game.scoreboard.compScore === 3) {
            winner.innerHTML = `Congratulations Player 2! You won the game!`;
              }
          scoreH1.innerHTML = `${this.userScore} - ${this.compScore}`;
    }
    reset(){
        this.score = 0;
        this.compScore = 0;
    }
}

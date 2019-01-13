import { Player } from "./Player";
import { Game } from "./Game";
import { TieBreakGame } from "./TieBreakGame";

const getSetWinner = (p1Score, p2Score) => {
  if (
    ((p1Score === 7 || p2Score === 7) && Math.abs(p1Score - p2Score) >= 2) ||
    (p1Score === 6 && p2Score === 7) ||
    (p1Score === 7 && p2Score === 6)
  ) {
    return p1Score - p2Score > 0 ? 1 : 2;
  }
  return 0;
};

const getGameWinner = (p1Score, p2Score) => {
  if ((p1Score >= 4 || p2Score >= 4) && Math.abs(p1Score - p2Score) >= 2) {
    return p1Score - p2Score > 0 ? 1 : 2;
  }
  return 0;
};

const getTieBreakGameWinner = (p1Score, p2Score) => {
  if ((p1Score >= 7 || p2Score >= 7) && Math.abs(p1Score - p2Score) >= 2) {
    return p1Score - p2Score > 0 ? 1 : 2;
  }
  return 0;
};

class Match {
  constructor(p1, p2) {
    this.player1 = new Player(p1);
    this.player2 = new Player(p2);
    this.currentGame = new Game(this.player1, this.player2);
    this.tieBreakGame = false;
  }

  wonPoint(playerName) {
    this.currentGame.wonPoint(playerName);

    let gameWinner;
    // Check if we are in the tie break.
    if (this.tieBreakGame) {
      console.log("We are in the tie-break");
      // Get tie-break winner
      gameWinner = getTieBreakGameWinner(
        this.player1.pointsWon,
        this.player2.pointsWon
      );
    } else {
      gameWinner = getGameWinner(
        this.player1.pointsWon,
        this.player2.pointsWon
      );
    }

    if (gameWinner) {
      this.player1.pointsWon = 0;
      this.player2.pointsWon = 0;
      gameWinner === 1 ? this.player1.gamesWon++ : this.player2.gamesWon++;

      if (this.player1.gamesWon === 6 && this.player2.gamesWon === 6) {
        // If meets tie-break condition, start tie break game and set flag to true.
        this.currentGame = new TieBreakGame(this.player1, this.player2);
        this.tieBreakGame = true;
      } else {
        // If doesn't meet tie-break condition, start normal game.
        this.currentGame = new Game(this.player1, this.player2);
      }
    }

    // Check if we have a set winner
    const setWinner = getSetWinner(
      this.player1.gamesWon,
      this.player2.gamesWon
    );
    if (setWinner) {
      console.log(
        `The set is end, and the set winner is: ${
          setWinner === 1 ? this.player1.name : this.player2.name
        }`
      );
    }
  }

  score() {
    return `${this.player1.gamesWon}-${this.player2.gamesWon}${
      this.currentGame.score() ? `, ` : ""
    }${this.currentGame.score()}`;
  }
}

export { Match };

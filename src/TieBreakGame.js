import { Game } from "./Game";
const getPointsScore = (p1Score, p2Score) =>
  p1Score === 0 && p2Score === 0 ? "" : `${p1Score}-${p2Score}`;

class TieBreakGame extends Game {
  score() {
    return getPointsScore(this.player1.pointsWon, this.player2.pointsWon);
  }
}

export { TieBreakGame };

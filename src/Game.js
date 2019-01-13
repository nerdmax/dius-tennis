const getTennisPoints = points => {
  if (points === 0) {
    return 0;
  } else if (points === 1) {
    return 15;
  } else if (points === 2) {
    return 30;
  } else if (points === 3) {
    return 40;
  } else {
    throw new Error();
  }
};

const getPointsScore = (p1Score, p2Score) => {
  if (p1Score === 0 && p2Score === 0) {
    return "";
  } else if (
    p1Score <= 3 &&
    p2Score <= 3 &&
    !(p1Score === 3 && p2Score === 3)
  ) {
    return `${getTennisPoints(p1Score)}-${getTennisPoints(p2Score)}`;
  } else if (p1Score >= 3 && p2Score >= 3) {
    if (p1Score === p2Score) {
      return "Deuce";
    }
    return `Advantage player ${p1Score > p2Score ? "1" : "2"}`;
  }
};

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  wonPoint(playerName) {
    let player;
    if (this.player1.name === playerName) {
      player = this.player1;
    }
    if (this.player2.name === playerName) {
      player = this.player2;
    }
    player.pointsWon++;
  }
  score() {
    return getPointsScore(this.player1.pointsWon, this.player2.pointsWon);
  }
}

export { Game };

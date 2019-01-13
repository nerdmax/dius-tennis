import { Match } from "./index";

const wonPoints = (match, players) => {
  players.forEach(player => {
    match.wonPoint(`player ${player}`);
  });
};

test("0-0 15-15", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 2]);
  expect(match.score()).toBe("0-0, 15-15");
});

test("0-0 40-15", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 2, 1, 1]);
  expect(match.score()).toBe("0-0, 40-15");
});

test("0-0 Deuce", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 2, 1, 1, 2, 2]);
  expect(match.score()).toBe("0-0, Deuce");
});

test("0-0, Advantage player 1", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 2, 1, 1, 2, 2, 1]);
  expect(match.score()).toBe("0-0, Advantage player 1");
});

test("1-0", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 1, 1, 1]);
  expect(match.score()).toBe("1-0");
});

test("1-0 15-15", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 1, 1, 1, 1, 2]);
  expect(match.score()).toBe("1-0, 15-15");
});

test("1-0 40-15", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 1, 1, 1, 1, 1, 1, 2]);
  expect(match.score()).toBe("1-0, 40-15");
});

test("1-0 Deuce", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 1, 1, 1, 1, 1, 1, 2, 2, 2]);
  expect(match.score()).toBe("1-0, Deuce");
});

test("1-0, Advantage player 1", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1]);
  expect(match.score()).toBe("1-0, Advantage player 1");
});

test("2-0", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1]);
  expect(match.score()).toBe("2-0");
});

test("6-0, 40-0", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ]);
  expect(match.score()).toBe("6-0, 40-0");
});

test("7-0", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ]);
  expect(match.score()).toBe("7-0");
});

test("0-7", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2
  ]);
  expect(match.score()).toBe("0-7");
});

test("6-6, 1-0", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1
  ]);
  expect(match.score()).toBe("6-6, 1-0");
});

test("6-6, 4-0", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1
  ]);
  expect(match.score()).toBe("6-6, 4-0");
});

test("6-6, 7-7", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    2
  ]);
  expect(match.score()).toBe("6-6, 7-7");
});

test("7-6", () => {
  var match = new Match("player 1", "player 2");
  wonPoints(match, [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    2,
    1,
    1
  ]);
  expect(match.score()).toBe("7-6");
});

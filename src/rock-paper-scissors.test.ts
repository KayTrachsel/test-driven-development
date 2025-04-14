import { play } from "./rock-paper-scissors";

describe("Rock Paper Scissors – play()", () => {

  test("rock vs scissors → player 1 wins", () => {
    expect(play("rock", "scissors")).toBe(1);
  });

  test("scissors vs paper → player 1 wins", () => {
    expect(play("scissors", "paper")).toBe(1);
  });

  test("paper vs rock → player 1 wins", () => {
    expect(play("paper", "rock")).toBe(1);
  });

  test("scissors vs rock → player 2 wins", () => {
    expect(play("scissors", "rock")).toBe(2);
  });

  test("paper vs scissors → player 2 wins", () => {
    expect(play("paper", "scissors")).toBe(2);
  });

  test("rock vs paper → player 2 wins", () => {
    expect(play("rock", "paper")).toBe(2);
  });

  test("rock vs rock → draw", () => {
    expect(play("rock", "rock")).toBe(0);
  });

  test("paper vs paper → draw", () => {
    expect(play("paper", "paper")).toBe(0);
  });

  test("scissors vs scissors → draw", () => {
    expect(play("scissors", "scissors")).toBe(0);
  });

  test("Rock vs  Paper → player 1 wins (case + whitespace)", () => {
    expect(play(" Rock ", " paper")).toBe(1);
  });

  test("SCISSORS vs ROCK → player 2 wins (uppercase)", () => {
    expect(play("SCISSORS", "ROCK")).toBe(2);
  });

  test(" Paper  vs   PAPER  → draw (whitespace)", () => {
    expect(play(" Paper  ", "   PAPER ")).toBe(0);
  });

  test("invalid move for player 1 → throws error", () => {
    expect(() => play("banana", "rock")).toThrow("Invalid move");
  });

  test("invalid move for player 2 → throws error", () => {
    expect(() => play("rock", "lizard")).toThrow("Invalid move");
  });

});
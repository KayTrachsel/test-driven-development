export function play(p1: string, p2: string): number {
  const normalize = (input: string) => input.trim().toLowerCase();
  const move1 = normalize(p1);
  const move2 = normalize(p2);
  const validMoves = ["rock", "paper", "scissors"];
  if (!validMoves.includes(move1)) {
    throw new Error(`Invalid move: ${p1}`);
  }

  if (!validMoves.includes(move2)) {
    throw new Error(`Invalid move: ${p2}`);
  }
  
  if (move1 === move2) return 0;
  
  const beats: Record<string, string> = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  return beats[move1] === move2 ? 1 : 2;
}

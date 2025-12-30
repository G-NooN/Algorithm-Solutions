import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const scores = input.split("\n").map((score) => {
  const [T, F, S, P, C] = score.split(" ").map(Number);
  return 6 * T + 3 * F + 2 * S + P + 2 * C;
});

console.log(scores.join(" "));

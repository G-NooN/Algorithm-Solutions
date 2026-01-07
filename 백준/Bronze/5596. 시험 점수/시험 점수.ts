import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input.split("\n").map((value) => {
  const scores = value.split(" ").map(Number);
  return scores.reduce((acc, score) => acc + score, 0);
});

console.log(Math.max(...result));

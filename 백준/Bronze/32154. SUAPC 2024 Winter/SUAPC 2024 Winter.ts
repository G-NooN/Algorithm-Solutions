import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const scoreboard = [
  {
    score: 11,
    solved: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "L", "M"],
  },
  { score: 9, solved: ["A", "C", "E", "F", "G", "H", "I", "L", "M"] },
  { score: 9, solved: ["A", "C", "E", "F", "G", "H", "I", "L", "M"] },
  { score: 9, solved: ["A", "B", "C", "E", "F", "G", "H", "L", "M"] },
  { score: 8, solved: ["A", "C", "E", "F", "G", "H", "L", "M"] },
  { score: 8, solved: ["A", "C", "E", "F", "G", "H", "L", "M"] },
  { score: 8, solved: ["A", "C", "E", "F", "G", "H", "L", "M"] },
  { score: 8, solved: ["A", "C", "E", "F", "G", "H", "L", "M"] },
  { score: 8, solved: ["A", "C", "E", "F", "G", "H", "L", "M"] },
  { score: 8, solved: ["A", "B", "C", "F", "G", "H", "L", "M"] },
];

const { score, solved } = scoreboard[Number(input) - 1];
const result = [score, [...solved].join(" ")];

console.log(result.join("\n"));

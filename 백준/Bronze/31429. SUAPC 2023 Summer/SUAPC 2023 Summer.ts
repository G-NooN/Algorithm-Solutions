import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const scoreboard = [
  [12, 1600],
  [11, 894],
  [11, 1327],
  [10, 1311],
  [9, 1004],
  [9, 1178],
  [9, 1357],
  [8, 837],
  [7, 1055],
  [6, 556],
  [6, 773],
];


console.log(scoreboard[Number(input) - 1].join(" "));

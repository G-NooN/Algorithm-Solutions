import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const repeat = Math.pow(Number(input), 2);

console.log(repeat <= 100000000 ? "Accepted" : "Time limit exceeded");
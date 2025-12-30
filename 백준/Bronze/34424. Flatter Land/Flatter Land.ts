import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [count, distance] = input.split("\n").map(Number);

console.log(distance * (count - 1));

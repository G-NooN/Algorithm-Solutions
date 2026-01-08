import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, width, target] = input.split(" ").map(Number);

console.log(Math.floor(target / width), target % width);

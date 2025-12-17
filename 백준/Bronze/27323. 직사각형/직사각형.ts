import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [h, w] = input.split("\n").map(Number);

console.log(h * w);
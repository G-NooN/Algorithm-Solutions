import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b, c] = input.split(" ").map(Number);

console.log(a + b === c ? "correct!" : "wrong!");

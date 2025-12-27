import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(Number);

console.log(2 * a < b ? "H" : "E");

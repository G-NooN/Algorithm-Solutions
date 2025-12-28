import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [R, G, B] = input.split("\n").map(Number);

console.log(3 * R + 4 * G + 5 * B);

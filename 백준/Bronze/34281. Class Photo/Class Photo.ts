import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [w, h] = input.split("\n").map(Number);

console.log(w * h);

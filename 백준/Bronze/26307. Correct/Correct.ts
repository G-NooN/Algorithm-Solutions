import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [hour, minute] = input.split(" ").map(Number);

console.log((hour - 9) * 60 + minute);

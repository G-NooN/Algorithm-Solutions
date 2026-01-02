import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [hour, minute] = input.split("\n").map(Number);

console.log(60 * hour + minute);

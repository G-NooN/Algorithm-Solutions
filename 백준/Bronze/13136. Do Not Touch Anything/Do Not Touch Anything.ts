import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [height, width, target] = input.split(" ").map(Number);

console.log(Math.ceil(height / target) * Math.ceil(width / target));

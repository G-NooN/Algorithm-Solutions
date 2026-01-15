import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [cow, width, height, size] = input.split(" ").map(Number);

const capacity = Math.floor(width / size) * Math.floor(height / size);

console.log(Math.min(cow, capacity));

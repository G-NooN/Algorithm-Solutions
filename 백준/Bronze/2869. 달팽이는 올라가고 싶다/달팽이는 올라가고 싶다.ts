import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [up, down, target] = input.split(" ").map(Number);

const count = (target - down) / (up - down);

console.log(Math.ceil(count));

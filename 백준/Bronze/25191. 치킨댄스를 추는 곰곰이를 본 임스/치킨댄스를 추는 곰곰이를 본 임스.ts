import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [chicken, drink] = input.split("\n");

const [coke, beer] = drink.split(" ").map(Number);

console.log(Math.min(Number(chicken), Math.floor(coke / 2) + beer));

import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [balance, price] = input.split(" ").map(Number);

console.log(100 * balance >= price ? "Yes" : "No");

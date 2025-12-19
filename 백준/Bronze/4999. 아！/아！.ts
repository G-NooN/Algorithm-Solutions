import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [supply, demand] = input.split("\n");

console.log(supply.includes(demand) ? "go" : "no");
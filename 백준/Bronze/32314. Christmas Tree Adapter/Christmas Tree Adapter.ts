import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [ampere, power] = input.split("\n");
const [watt, volt] = power.split(" ").map(Number);

const result = Number(ampere) <= watt / volt;

console.log(Number(result));

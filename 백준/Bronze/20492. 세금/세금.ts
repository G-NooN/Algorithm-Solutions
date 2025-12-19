import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const taxRate = 0.22;
const value = Number(input);

const price1 = value - value * taxRate;
const price2 = value - value * 0.2 * taxRate;

console.log(price1, price2);
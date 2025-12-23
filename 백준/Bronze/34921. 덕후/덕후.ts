import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [age, tier] = input.split(" ").map(Number);

const result = 10 + 2 * (25 - age + tier);

console.log(result < 0 ? 0 : result);

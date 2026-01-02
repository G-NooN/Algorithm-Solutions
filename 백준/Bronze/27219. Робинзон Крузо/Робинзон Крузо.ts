import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();
const num = Number(input);

console.log("V".repeat(Math.floor(num / 5)) + "I".repeat(num % 5));

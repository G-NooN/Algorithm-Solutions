import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(input.includes("9") ? "F" : "S");

import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(`Naver ${input.toLowerCase() === "n" ? "D2" : "Whale"}`);
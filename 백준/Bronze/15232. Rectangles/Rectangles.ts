import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [row, column] = input.split("\n").map(Number);

const result = Array.from({ length: row }, () => "*".repeat(column));

console.log(result.join("\n"));

import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const values = input.split("\n").slice(0, -1);

const result = values.map((value) => {
  const [a, b] = value.split(" ").map(Number);
  return a > b ? "Yes" : "No";
});

console.log(result.join("\n"));
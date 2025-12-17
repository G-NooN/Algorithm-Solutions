import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").slice(0, -1);

const result: string[] = [];

array.forEach((value) => {
  const [a, b, c] = value
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
    ? result.push("right")
    : result.push("wrong");
});

console.log(result.join("\n"));
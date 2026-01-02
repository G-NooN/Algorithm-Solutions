import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [max, mel] = input.split("\n").map((value) => {
  const [t, e, f] = value.split(" ").map(Number);
  return 3 * t + 20 * e + 120 * f;
});

console.log(max === mel ? "Draw" : max > mel ? "Max" : "Mel");

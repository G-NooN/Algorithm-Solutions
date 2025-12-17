import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input
  .split("\n")
  .map(Number)
  .map((value) => value % 42);

const solution = () => {
  const targetArray = new Set(array);
  console.log(targetArray.size);
};

solution();

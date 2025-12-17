import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split(" ").map(Number);

const pieces = [1, 1, 2, 2, 2, 8];

const solution = () => {
  const result = array.map((value, index) => pieces[index] - value);
  console.log(result.join(" "));
};

solution();

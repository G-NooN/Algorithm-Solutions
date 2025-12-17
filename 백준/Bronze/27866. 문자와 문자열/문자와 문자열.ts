import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const [text, target] = input.split("\n");

const solution = () => {
  const targetIndex = Number(target) - 1;
  console.log(text[targetIndex]);
};

solution();

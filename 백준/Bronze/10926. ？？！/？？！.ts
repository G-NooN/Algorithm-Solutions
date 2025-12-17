import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const text = "??!";

const solution = () => {
  const result = input + text;
  console.log(result);
};

solution();

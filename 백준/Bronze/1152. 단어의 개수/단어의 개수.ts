import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const solution = () => {
  const words = input
    .trim()
    .split(" ")
    .filter((word) => word !== "");

  console.log(words.length);
};

solution();

import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(BigInt);

const solution = () => {
  const sum = (a + b).toString().replace("n", "");
  console.log(sum);
};

solution();

import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const buddhistYearCount = 543;

const solution = () => {
  const result = Number(input) - buddhistYearCount;
  console.log(result);
};

solution();

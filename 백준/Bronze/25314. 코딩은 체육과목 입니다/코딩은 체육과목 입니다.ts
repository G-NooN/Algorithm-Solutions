import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const value = Number(input);

const solution = (value: number) => {
  let resultText = "";
  const count = value / 4;

  for (let i = 0; i < count; i++) {
    resultText += "long ";
  }

  console.log(resultText + "int");
};

solution(value);

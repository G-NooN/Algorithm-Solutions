import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n").map(Number);

values.forEach((value) => {
  let mod = 0;

  const qCount = Math.floor(value / 25);

  mod = value % 25;

  const dCount = Math.floor(mod / 10);

  mod %= 10;

  const nCount = Math.floor(mod / 5);
  const pCount = mod % 5;

  const resultText = `${qCount} ${dCount} ${nCount} ${pCount}`;

  console.log(resultText);
});
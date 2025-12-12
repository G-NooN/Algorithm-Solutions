import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n").map(Number);

const changeList = [25, 10, 5, 1];

const resultArray = values.map((value) => {
  const coinCountArray: number[] = [];

  changeList.forEach((change) => {
    coinCountArray.push(Math.floor(value / change));
    value %= change;
  });

  return coinCountArray.join(" ");
});

console.log(resultArray.join("\n"));

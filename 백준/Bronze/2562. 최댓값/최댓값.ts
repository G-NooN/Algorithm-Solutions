import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split("\n");

let max = array[0];
let maxIndex = 0;

const solution = () => {
  array.forEach((value, index) => {
    if (Number(value) > Number(max)) {
      max = value;
      maxIndex = index;
    }
  });

  console.log(max);
  console.log(maxIndex + 1);
};

solution();

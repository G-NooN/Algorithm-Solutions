import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").map(Number);
const multiple = array.reduce((acc, current) => acc * current);

const numbers = Array.from({ length: 10 }, () => 0);

numbers.forEach((_, i) => {
  const multipleTextArray = multiple.toString().split("");

  multipleTextArray.forEach((value) => {
    if (value === i.toString()) {
      numbers[i]++;
    }
  });
});

console.log(numbers.join("\n"));
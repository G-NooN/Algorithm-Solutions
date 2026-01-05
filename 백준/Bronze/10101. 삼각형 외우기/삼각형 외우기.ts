import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").map(Number);

let result = "Error";

if (array.reduce((acc, value) => acc + value, 0) !== 180) {
  console.log(result);
} else {
  const arraySet = new Set(array);

  switch (arraySet.size) {
    case 1:
      result = "Equilateral";
      break;
    case 2:
      result = "Isosceles";
      break;
    case 3:
      result = "Scalene";
      break;
  }

  console.log(result);
}

import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split(" ").map(Number);

type resultType = "ascending" | "descending" | "mixed";

let result: resultType = "mixed";

for (let i = 0; i < array.length - 1; i++) {
  if (array[i] - array[i + 1] === -1) {
    result = "ascending";
  } else if (array[i] - array[i + 1] === 1) {
    result = "descending";
  } else {
    result = "mixed";
    break;
  }
}

console.log(result);
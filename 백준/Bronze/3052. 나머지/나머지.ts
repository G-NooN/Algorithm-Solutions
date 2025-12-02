const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input
  .split("\n")
  .map(Number)
  .map((value) => value % 42)
  .sort((a, b) => a - b);

let count = 1;

const solution = () => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      count++;
    }
  }

  console.log(count);
};

solution();
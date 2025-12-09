const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n").map((row) => row.split(""));

const solution = () => {
  const maxCount = Math.max(...array.map((value) => value.length));
  
  let result = "";

  for (let column = 0; column < maxCount; column++) {
    for (let row = 0; row < array.length; row++) {
      if (!!array[row][column]) {
        result += array[row][column];
      }
    }
  }

  console.log(result);
};

solution();
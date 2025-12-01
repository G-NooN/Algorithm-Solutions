const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n");
const [, values, target] = array;

const solution = () => {
  let count = 0;
  const valueArray = values.split(" ");

  valueArray.forEach((value) => {
    if (value === target) {
      count++;
    }
  });

  console.log(count);
};

solution();

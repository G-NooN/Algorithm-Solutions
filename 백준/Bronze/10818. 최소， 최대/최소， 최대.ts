const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n");
const [, valueArray] = array;

const values = valueArray.split(" ");

let [min, max] = [values[0], values[0]];

const solution = () => {
  values.forEach((value) => {
    if (Number(value) < Number(min)) {
      min = value;
    }
    if (Number(value) > Number(max)) {
      max = value;
    }
  });

  console.log(min, max);
};

solution();
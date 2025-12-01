const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n");
const [targetArray, valueArray] = array;

const [, target] = targetArray.split(" ");
const values = valueArray.split(" ");

const solution = () => {
  let result = "";

  values.forEach((value) => {
    if (Number(value) < Number(target)) {
      result += `${value} `;
    }
  });

  console.log(result);
};

solution();
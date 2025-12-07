const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [size, ...values] = input.split("\n");

const [row, column] = size.split(" ").map(Number);

const array1 = values
  .slice(0, row)
  .map((value) => value.split(" ").map(Number));
const array2 = values.slice(row).map((value) => value.split(" ").map(Number));

const resultArray = Array.from({ length: row }, () =>
  Array.from({ length: column }, () => 0)
);

const solution = () => {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      resultArray[i][j] = array1[i][j] + array2[i][j];
    }
  }

  const result = resultArray.map((value) => value.join(" ")).join("\n");

  console.log(result);
};

solution();
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n").map((row) => row.split(" ").map(Number));

const solution = () => {
  const maxNumber = Math.max(...array.map((row) => Math.max(...row)));

  const maxNumberRowIndex = array.findIndex((row) => row.includes(maxNumber));

  const maxNumberColumnIndex = array[maxNumberRowIndex].findIndex(
    (column) => column === maxNumber
  );

  console.log(maxNumber);
  console.log(`${maxNumberRowIndex + 1} ${maxNumberColumnIndex + 1}`);
};

solution();
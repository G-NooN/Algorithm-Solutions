const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const buddhistYearCount = 543;

const solution = () => {
  const result = Number(input) - buddhistYearCount;
  console.log(result);
};

solution();
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n");

const solution = () => {
  const result = array.reduce((sum, current) => sum + Number(current), 0);
  console.log(result);
};

solution();
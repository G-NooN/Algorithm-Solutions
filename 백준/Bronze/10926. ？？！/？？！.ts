const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const text = "??!";

const solution = () => {
  const result = input + text;
  console.log(result);
};

solution();
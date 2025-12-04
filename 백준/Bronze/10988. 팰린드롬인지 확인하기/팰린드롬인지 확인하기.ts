const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const solution = () => {
  const reversed = input.split("").reverse().join("");
  console.log(reversed === input ? 1 : 0);
};

solution();
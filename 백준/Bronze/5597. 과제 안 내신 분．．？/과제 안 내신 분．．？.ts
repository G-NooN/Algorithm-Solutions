const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split("\n").map(Number);

const solution = () => {
  for (let i = 0; i < 30; i++) {
    if (!array.includes(i + 1)) {
      console.log(i + 1);
    }
  }
};

solution();
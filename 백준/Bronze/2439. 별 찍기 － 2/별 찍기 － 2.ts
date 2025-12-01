const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const solution = () => {
  for (let i = Number(input); i > 0; i--) {
    const space = " ".repeat(i - 1);
    const star = "*".repeat(Number(input) - i + 1);

    console.log(space + star);
  }
};

solution();
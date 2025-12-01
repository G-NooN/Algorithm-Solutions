const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const solution = () => {
  for (let i = 0; i < Number(input); i++) {
    console.log("*".repeat(i + 1));
  }
};

solution();
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const writeStar = (count: number, max: number) => {
  const tab = " ".repeat(max - count);
  const star = "*".repeat(2 * count - 1);

  console.log(tab + star);
};

const solution = () => {
  for (let i = 1; i < Number(input); i++) {
    writeStar(i, Number(input));
  }
  for (let i = Number(input); i > 0; i--) {
    writeStar(i, Number(input));
  }
};

solution();
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(BigInt);

const solution = () => {
  const sum = (a + b).toString().replace("n", "");
  console.log(sum);
};

solution();
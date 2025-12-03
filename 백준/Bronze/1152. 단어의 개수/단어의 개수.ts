const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const solution = () => {
  const words = input
    .trim()
    .split(" ")
    .filter((word) => word !== "");

  console.log(words.length);
};

solution();
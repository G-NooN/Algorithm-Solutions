const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split(" ");

const solution = () => {
  const reversedArray = array.map((value) =>
    value.split("").reverse().join("")
  );

  const result = Math.max(...reversedArray.map(Number));

  console.log(result);
};

solution();
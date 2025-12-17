import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split(" ");

const solution = () => {
  const reversedArray = array.map((value) =>
    value.split("").reverse().join("")
  );

  const result = Math.max(...reversedArray.map(Number));

  console.log(result);
};

solution();

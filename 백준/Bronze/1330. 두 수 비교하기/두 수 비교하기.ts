const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const array = input.split(" ");

const solution = (a: string, b: string) => {
  const num1 = Number(a);
  const num2 = Number(b);

  let result = "";

  if (num1 > num2) {
    result = ">";
  } else if (num1 < num2) {
    result = "<";
  } else {
    result = "==";
  }

  console.log(result);
};

solution(array[0], array[1]);
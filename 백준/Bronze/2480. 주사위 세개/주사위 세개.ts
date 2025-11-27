const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split(" ");

const solution = (a: string, b: string, c: string) => {
  let price = 0;

  if (a === b && b === c) {
    price = 10000 + Number(b) * 1000;
  } else if (a === b || b === c) {
    price = 1000 + Number(b) * 100;
  } else if (a === c) {
    price = 1000 + Number(a) * 100;
  } else {
    price = Math.max(Number(a), Number(b), Number(c)) * 100;
  }

  console.log(price);
};

solution(array[0], array[1], array[2]);
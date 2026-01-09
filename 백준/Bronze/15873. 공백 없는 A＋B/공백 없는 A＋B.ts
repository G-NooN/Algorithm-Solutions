const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

let result = 0;

switch (input.length) {
  case 2:
    result = [...input].reduce((acc, current) => acc + Number(current), 0);
    break;
  case 3:
    result =
      10 +
      ([...input].pop() === "0"
        ? Number(input.slice(0, 1))
        : Number(input.slice(2)));
    break;
  case 4:
    result = 20;
    break;
}

console.log(result);

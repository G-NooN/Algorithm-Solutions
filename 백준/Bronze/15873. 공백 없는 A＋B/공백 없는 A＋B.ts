const fs = require("fs")

const input = fs.readFileSync(0).toString().trim();

let result = 0;

switch (input.length) {
  case 2:
    result = Number(input.slice(0, 1)) + Number(input.slice(1));
    break;
  case 3:
    result =
      [...input].pop() === "0"
        ? Number(input.slice(0, 1)) + Number(input.slice(1))
        : Number(input.slice(0, 2)) + Number(input.slice(2));
    break;
  case 4:
    result = Number(input.slice(0, 2)) + Number(input.slice(2));
    break;
}

console.log(result);

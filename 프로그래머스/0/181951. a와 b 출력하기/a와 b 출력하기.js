const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const array = input.split(" ").map(Number);

const result = array.map((value, index) => {
  return `${String.fromCharCode(97 + index)} = ${value}`;
});

console.log(result.join("\n"));
const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const reversedInput = [...input].reverse().join("");

console.log(Number(input === reversedInput));

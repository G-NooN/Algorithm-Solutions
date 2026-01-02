const fs = require("fs")

const input = fs.readFileSync(0).toString().trim();

const reversedInput = [...input].reverse().join("");

console.log(Number(input === reversedInput));

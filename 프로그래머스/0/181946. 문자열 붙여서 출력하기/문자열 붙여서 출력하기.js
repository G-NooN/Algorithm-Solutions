const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

console.log(input.split(" ").join(""));
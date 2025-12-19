const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const [str, n] = input.split(" ");

console.log(str.repeat(n));
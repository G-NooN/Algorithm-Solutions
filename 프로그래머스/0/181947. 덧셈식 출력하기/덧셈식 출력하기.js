const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(Number);

console.log(`${a} + ${b} = ${a + b}`);
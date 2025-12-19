const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const isEven = input % 2 === 0 ? "even" : "odd";

console.log(`${input} is ${isEven}`);
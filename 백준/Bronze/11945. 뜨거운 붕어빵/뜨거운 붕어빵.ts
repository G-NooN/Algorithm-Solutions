const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result = values.map((value) => [...value].reverse().join(""));

console.log(result.join("\n"));

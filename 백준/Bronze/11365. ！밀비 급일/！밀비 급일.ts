const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const array = input
  .split("\n")
  .slice(0, -1)
  .map((value) => [...value].reverse().join(""));

console.log(array.join("\n"));

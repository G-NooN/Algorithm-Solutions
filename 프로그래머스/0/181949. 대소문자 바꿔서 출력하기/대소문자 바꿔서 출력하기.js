const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const array = input
  .split("")
  .map((letter) =>
    letter.charCodeAt(0) > 96 ? letter.toUpperCase() : letter.toLowerCase()
  );

console.log(array.join(""));
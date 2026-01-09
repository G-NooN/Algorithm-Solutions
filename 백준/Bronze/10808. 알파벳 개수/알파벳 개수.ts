const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const alphabets = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index)
).join("");

const result = Array.from({ length: 26 }, () => 0);

[...input].forEach((letter) => result[alphabets.indexOf(letter)]++);

console.log(result.join(" "));

const { readFileSync } = require("fs");

const input = readFileSync(0).toString().trim();

const result = Array.from({ length: Number(input) }, (_, index) =>
  "*".repeat(index + 1)
);

console.log(result.join("\n"));
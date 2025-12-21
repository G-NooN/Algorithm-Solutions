import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(
  Boolean(Number(input)) ? "Leading the Way to the Future" : "YONSEI"
);
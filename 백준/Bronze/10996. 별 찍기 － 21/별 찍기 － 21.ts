import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

const topCount = Math.ceil(count / 2);

const resultArray: string[] = [];

resultArray.push("* ".repeat(topCount));
resultArray.push(" *".repeat(count - topCount));

for (let i = 0; i < count; i++) {
  console.log(resultArray.join("\n"));
}
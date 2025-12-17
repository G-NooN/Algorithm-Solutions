import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [text, format] = input.split(" ");

const result = parseInt(text, Number(format));

console.log(result);
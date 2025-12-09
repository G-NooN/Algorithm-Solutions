import { readFileSync } from "fs";
import { platform } from "process";

const inputPath = platform === "linux" ? 0 : "./input.txt";
const input = readFileSync(inputPath).toString().trim();

const [text, format] = input.split(" ");

const result = parseInt(text, Number(format));

console.log(result);
import { readFileSync } from "fs";
import { platform } from "process";

const inputPath = platform === "linux" ? 0 : "./input.txt";
const input = readFileSync(inputPath).toString().trim();

const [a, b] = input.split(" ").map(BigInt);

const result = (a * b).toString().replace("n", "");

console.log(result);

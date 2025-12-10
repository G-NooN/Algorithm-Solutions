import { readFileSync } from "fs";
import { platform } from "process";

const inputPath = platform === "linux" ? 0 : "./input.txt";
const input = readFileSync(inputPath).toString().trim();

const [a, b] = input.split(" ").map(BigInt);

let [q, r] = [a / b, a % b];

if (a < 0 && r < 0) {
  q > 0 ? q++ : q--;
  r = a - q * b;
}

console.log(q.toString());
console.log(r.toString());
import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [a, b] = input.split(" ").map(BigInt);

const result: string[] = [];

let [q, r] = [a / b, a % b];

if (a < 0 && r < 0) {
  q > 0 ? q++ : q--;
  r = a - q * b;
}

result.push(q.toString());
result.push(r.toString());

console.log(result.join("\n"));

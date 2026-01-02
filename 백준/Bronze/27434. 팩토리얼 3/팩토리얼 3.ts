import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const num = Number(input);

const factorial = (left: number, right: number): bigint => {
  if (left === right) return BigInt(left);

  const mid = Math.floor((left + right) / 2);

  return factorial(left, mid) * factorial(mid + 1, right);
};

console.log(num === 0 ? 1 : factorial(1, num).toString());

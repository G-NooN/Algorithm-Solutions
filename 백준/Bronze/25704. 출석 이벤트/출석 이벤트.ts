import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [count, price] = input.split("\n").map(Number);

const valueDiscountedPrice =
  price - (count >= 15 ? 2000 : count >= 5 ? 500 : 0);

const percentDiscountedPrice =
  price * (count >= 20 ? 0.75 : count >= 10 ? 0.9 : 1);

const lowestPrice = Math.min(valueDiscountedPrice, percentDiscountedPrice);

console.log(Math.max(lowestPrice, 0));

import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [count, price] = input.split("\n").map(Number);

const [discount500, discount10, discount2000, discount25] = [
  price - 500,
  price * 0.9,
  price - 2000,
  price * 0.75,
];

let lowestPrice = price;

if (count >= 20) {
  lowestPrice = Math.min(
    lowestPrice,
    discount500,
    discount10,
    discount2000,
    discount25
  );
} else if (count >= 15) {
  lowestPrice = Math.min(lowestPrice, discount500, discount10, discount2000);
} else if (count >= 10) {
  lowestPrice = Math.min(lowestPrice, discount500, discount10);
} else if (count >= 5) {
  lowestPrice = Math.min(lowestPrice, discount500);
}

console.log(lowestPrice > 0 ? lowestPrice : 0);

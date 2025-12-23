import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [H, I, A, R, C] = input.split(" ").map(Number);

console.log(H * I - A * R * C);

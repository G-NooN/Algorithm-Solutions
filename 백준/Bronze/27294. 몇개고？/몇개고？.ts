import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [time, drink] = input.split(" ").map(Number);

const result = time >= 12 && time <= 16 && !Boolean(drink) ? 320 : 280;

console.log(result);

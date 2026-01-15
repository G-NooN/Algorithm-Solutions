import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [width, height] = input.split(" ").map(BigInt);

console.log(((width * height) / BigInt(2)).toString());

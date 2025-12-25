import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const text = "UOS";
const index = (Number(input) - 1) % text.length;

console.log(text[index]);

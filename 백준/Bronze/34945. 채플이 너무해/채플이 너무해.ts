import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

console.log(6 - Number(input) > 0 ? "Oh My God!" : "Success!");

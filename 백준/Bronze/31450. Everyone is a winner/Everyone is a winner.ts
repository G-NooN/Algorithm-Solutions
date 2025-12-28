import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [medals, kids] = input.split(" ").map(Number);

console.log(medals % kids === 0 ? "Yes" : "No");

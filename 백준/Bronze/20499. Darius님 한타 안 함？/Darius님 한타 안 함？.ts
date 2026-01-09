import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [k, d, a] = input.split("/").map(Number);

console.log(k + a < d || d === 0 ? "hasu" : "gosu");

import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [supply, demand] = input.split("\n").map((value) => value.length);

console.log(supply >= demand ? "go" : "no");
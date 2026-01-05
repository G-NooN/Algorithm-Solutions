import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [target, cars] = input.split("\n");

const result = cars.match(new RegExp(`${target}`, "g"));

console.log(result?.length ?? 0);

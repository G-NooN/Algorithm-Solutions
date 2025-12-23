import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

let [year, month] = [2024, 1];

const target = month + 7 * Number(input);
const yearEnd = target % 12 === 0;

year += yearEnd ? Math.floor(target / 12) - 1 : Math.floor(target / 12);
month = yearEnd ? 12 : target % 12;

console.log(year, month);

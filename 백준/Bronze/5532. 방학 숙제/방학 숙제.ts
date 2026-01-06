import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [l, a, b, c, d] = input.split("\n").map(Number);

const korean = Math.ceil(a / c);
const math = Math.ceil(b / d);

console.log(l - Math.max(korean, math));

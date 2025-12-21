import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const divider = 20000303;

let mod = 0;

for (let i = 0; i < input.length; i++) {
  let digit = Number(input[i]);

  mod = (10 * mod + digit) % divider;
}

console.log(mod);
import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const target = Math.floor((Number(input) - 1) / 4);

const position = Number(input) % 4;

switch (position) {
  case 0:
    console.log(target % 2 === 0 ? 4 : 2);
    break;
  case 1:
    console.log(target % 2 === 0 ? 1 : 5);
    break;
  case 2:
    console.log(target % 2 === 0 ? 2 : 4);
    break;
  case 3:
    console.log(3);
    break;
}

import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const wave = Number(input);
let result = "Red";

if (wave < 425) {
  result = "Violet";
} else if (wave < 450) {
  result = "Indigo";
} else if (wave < 495) {
  result = "Blue";
} else if (wave < 570) {
  result = "Green";
} else if (wave < 590) {
  result = "Yellow";
} else if (wave < 620) {
  result = "Orange";
}

console.log(result);

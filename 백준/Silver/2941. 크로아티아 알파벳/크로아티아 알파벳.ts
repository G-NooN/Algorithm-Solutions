import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const croatianAlphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

const solution = () => {
  let replacedInput = input;

  for (let alphabet of croatianAlphabets) {
    replacedInput = replacedInput.replaceAll(alphabet, "@");
  }

  console.log(replacedInput.length);
};

solution();

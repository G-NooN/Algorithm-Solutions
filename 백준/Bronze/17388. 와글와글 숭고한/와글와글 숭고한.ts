import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [s, k, h] = input.split(" ").map(Number);

let result = "OK";

if (s + k + h < 100) {
  const min = Math.min(s, k, h);

  switch (min) {
    case s:
      result = "Soongsil";
      break;
    case k:
      result = "Korea";
      break;
    case h:
      result = "Hanyang";
      break;
  }
}

console.log(result);

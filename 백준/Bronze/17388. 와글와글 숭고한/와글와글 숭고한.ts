import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [s, k, h] = input.split(" ").map(Number);

if (s + k + h >= 100) {
  console.log("OK");
} else {
  const min = Math.min(s, k, h);

  switch (min) {
    case s:
      console.log("Soongsil");
      break;
    case k:
      console.log("Korea");
      break;
    case h:
      console.log("Hanyang");
      break;
  }
}

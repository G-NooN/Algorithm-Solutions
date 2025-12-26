import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, bus, subway] = input.split(" ").map(Number);

let result = "Anything";

if (bus < subway) {
  result = "Bus";
}

if (subway < bus) {
  result = "Subway";
}

console.log(result);

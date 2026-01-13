import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [[ax, ay, az], [cx, cy, cz]] = input
  .split("\n")
  .map((value) => value.split(" ").map(Number));

console.log(cx - az, cy / ay, cz - ax);

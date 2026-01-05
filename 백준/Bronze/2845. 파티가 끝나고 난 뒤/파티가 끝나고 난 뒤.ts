import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [fact, news] = input
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const real = fact.reduce((acc, value) => acc * value, 1);
const result = news.map((value) => value - real);

console.log(result.join(" "));

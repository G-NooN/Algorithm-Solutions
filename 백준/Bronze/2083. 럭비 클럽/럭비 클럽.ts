import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input
  .split("\n")
  .slice(0, -1)
  .map((value) => {
    const [name, age, weight] = value.split(" ");
    const adult = Number(age) > 17 || Number(weight) >= 80;

    return adult ? `${name} Senior` : `${name} Junior`;
  });

console.log(result.join("\n"));

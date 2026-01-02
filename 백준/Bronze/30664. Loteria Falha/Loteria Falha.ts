import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input
  .split("\n")
  .slice(0, -1)
  .map((value) =>
    BigInt(value) % BigInt(42) === BigInt(0) ? "PREMIADO" : "TENTE NOVAMENTE"
  );

console.log(result.join("\n"));

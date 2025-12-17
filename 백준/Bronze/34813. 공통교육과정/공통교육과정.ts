import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const classType = {
  F: "Foundation",
  C: "Claves",
  V: "Veritas",
  E: "Exploration",
};

console.log(classType[input[0] as keyof typeof classType]);
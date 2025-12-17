import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

switch (input[0]) {
  case "F":
    console.log("Foundation");
    break;
  case "C":
    console.log("Claves");
    break;
  case "V":
    console.log("Veritas");
    break;
  case "E":
    console.log("Exploration");
    break;
}
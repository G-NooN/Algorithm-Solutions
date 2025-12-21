import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const GEC = {
  NLCS: "North London Collegiate School",
  BHA: "Branksome Hall Asia",
  KIS: "Korea International School",
  SJA: "St. Johnsbury Academy",
};

console.log(GEC[input as keyof typeof GEC]);
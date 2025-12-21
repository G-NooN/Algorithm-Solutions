import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [toStation, toBuilding] = input
  .split("\n")
  .map((value) => value.split(" ").map(Number));

const [hy, yd] = [0, 1].map((value) => toStation[value] + toBuilding[value]);

console.log(hy === yd ? "Either" : hy < yd ? "Hanyang Univ." : "Yongdap");

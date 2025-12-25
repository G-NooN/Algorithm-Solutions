import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const clubs = {
  M: "MatKor",
  W: "WiCys",
  C: "CyKor",
  A: "AlKor",
  $: "$clear",
};

console.log(clubs[input as keyof typeof clubs]);

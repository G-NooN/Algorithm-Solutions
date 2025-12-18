import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").slice(0, -1);

const symbols = {
  animal: "Panthera tigris",
  flower: "Forsythia koreana",
  tree: "Pinus densiflora",
};

const result = array.map((value) => symbols[value as keyof typeof symbols]);

console.log(result.join("\n"));
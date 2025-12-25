import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const cheers = {
  SONGDO: "HIGHSCHOOL",
  CODE: "MASTER",
  "2023": "0611",
  ALGORITHM: "CONTEST",
};

console.log(cheers[input as keyof typeof cheers]);

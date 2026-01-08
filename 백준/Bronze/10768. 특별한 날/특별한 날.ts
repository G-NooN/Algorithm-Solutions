import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [month, day] = input.split("\n").map(Number);

let result = "Special";

if (month < 2) {
  result = "Before";
} else if (month > 2) {
  result = "After";
} else {
  if (day < 18) {
    result = "Before";
  } else if (day > 18) {
    result = "After";
  }
}

console.log(result);

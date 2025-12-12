import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const count = Number(input);

const result: string[] = [];

if (count > 1) {
  for (let i = 1; i < count; i++) {
    const leftTab = " ".repeat(count - i);

    if (i > 1) {
      const rightTab = " ".repeat(2 * (i - 1) - 1);
      result.push(leftTab + "*" + rightTab + "*");
    } else {
      result.push(leftTab + "*");
    }
  }
}

result.push("*".repeat(2 * count - 1));

console.log(result.join("\n"));

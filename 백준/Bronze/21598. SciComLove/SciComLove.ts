import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = Array.from({ length: Number(input) }, () => "SciComLove");

console.log(result.join("\n"));

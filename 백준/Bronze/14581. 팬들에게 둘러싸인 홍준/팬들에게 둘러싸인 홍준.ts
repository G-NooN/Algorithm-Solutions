import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const fan = ":fan:";

const result: string[] = [];

result.push(fan.repeat(3));
result.push(`${fan}:${input}:${fan}`);
result.push(fan.repeat(3));

console.log(result.join("\n"));

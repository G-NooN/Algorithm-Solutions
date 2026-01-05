import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [time, target] = input.split("\n");
let [hour, minute, second] = time.split(" ").map(Number);

const targetSecond = Number(target) + second;
const targetMinute = Math.floor(targetSecond / 60) + minute;
const targetHour = Math.floor(targetMinute / 60) + hour;

second = targetSecond % 60;
minute = targetMinute % 60;
hour = targetHour % 24;

console.log(hour, minute, second);

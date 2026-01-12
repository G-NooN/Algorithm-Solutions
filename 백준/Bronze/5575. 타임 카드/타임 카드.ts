import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const array = input.split("\n").map((value) => {
  const [startHour, startMinute, startSecond, endHour, endMinute, endSecond] =
    value.split(" ").map(Number);

  const targetSecond = endSecond - startSecond;
  const resultSecond = targetSecond < 0 ? 60 + targetSecond : targetSecond;

  const targetMinute = endMinute - startMinute - (targetSecond < 0 ? 1 : 0);
  const resultMinute = targetMinute < 0 ? 60 + targetMinute : targetMinute;

  const resultHour = endHour - startHour - (targetMinute < 0 ? 1 : 0);

  return `${resultHour} ${resultMinute} ${resultSecond}`;
});

console.log(array.join("\n"));

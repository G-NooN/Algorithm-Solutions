import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const result = input.split("\n").map((value) => {
  const [startHour, startMinute, startSecond, endHour, endMinute, endSecond] =
    value.split(" ").map(Number);

  const startTime = startHour * 3600 + startMinute * 60 + startSecond;
  const endTime = endHour * 3600 + endMinute * 60 + endSecond;

  const resultTime = endTime - startTime;

  const resultHour = Math.floor(resultTime / 3600);
  const resultMinute = Math.floor((resultTime % 3600) / 60);
  const resultSecond = resultTime % 60;

  return `${resultHour} ${resultMinute} ${resultSecond}`;
});

console.log(result.join("\n"));

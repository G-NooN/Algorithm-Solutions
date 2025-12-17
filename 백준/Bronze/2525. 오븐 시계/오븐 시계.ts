import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const array = input.split("\n");
const timeArray = array[0].split(" ");

const hour = timeArray[0];
const minute = timeArray[1];
const period = array[1];

const solution = (hour: number, minute: number, period: number) => {
  let targetHour = hour;
  let targetMinute = minute + period;

  while (targetMinute > 59) {
    targetMinute -= 60;
    targetHour += 1;
  }

  if (targetHour > 23) {
    targetHour -= 24;
  }

  const result = `${targetHour} ${targetMinute}`;
  console.log(result);
};

solution(Number(hour), Number(minute), Number(period));

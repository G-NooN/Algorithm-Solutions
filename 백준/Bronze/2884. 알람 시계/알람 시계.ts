const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const array = input.split(" ");

const hour = array[0];
const minute = array[1];

const solution = (hour: number, minute: number) => {
  let targetHour = hour;
  let targetMinute = minute - 45;

  if (targetMinute < 0) {
    targetMinute += 60;
    targetHour -= 1;
  }

  if (targetHour < 0) {
    targetHour = 23;
  }

  const result = `${targetHour} ${targetMinute}`;
  console.log(result);
};

solution(Number(hour), Number(minute));
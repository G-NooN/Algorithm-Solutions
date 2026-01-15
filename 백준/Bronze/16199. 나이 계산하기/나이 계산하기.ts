import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [[birthYear, birthDate], [targetYear, targetDate]] = input
  .split("\n")
  .map((value) => {
    const [year, month, day] = value.split(" ");
    const monthDay = month.padStart(2, "0") + day.padStart(2, "0");

    return [Number(year), Number(monthDay)];
  });

const yearAge = targetYear - birthYear;
const countAge = yearAge + 1;
const manAge = yearAge - (birthDate - targetDate > 0 ? 1 : 0);

console.log([manAge, countAge, yearAge].join("\n"));

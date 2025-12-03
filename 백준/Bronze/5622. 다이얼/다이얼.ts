const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const letters = [
  "",
  "",
  "",
  "ABC",
  "DEF",
  "GHI",
  "JKL",
  "MNO",
  "PQRS",
  "TUV",
  "WXYZ",
];

const words = input.split("");

const solution = () => {
  const seconds = words.map((word) =>
    letters.findIndex((letter) => letter.includes(word))
  );

  const result = seconds.reduce((sum, current) => sum + current, 0);
  console.log(result);
};

solution();
import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const letters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index)
);

const solution = () => {
  const result = letters.map((letter) =>
    input.includes(letter) ? input.indexOf(letter) : -1
  );

  console.log(result.join(" "));
};

solution();

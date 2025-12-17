import { readFileSync } from "fs";
const input = readFileSync(0).toString().trim();

const backgroundSize = 100;
const paperSize = 10;

const [, ...points] = input.split("\n");

const background = Array.from({ length: backgroundSize }, () =>
  Array.from({ length: backgroundSize }, () => false)
);

const solution = () => {
  points.forEach((point) => {
    const [x, y] = point.split(" ").map(Number);

    for (let i = x; i < x + paperSize; i++) {
      for (let j = y; j < y + paperSize; j++) {
        background[i][j] = true;
      }
    }
  });

  let areaSize = 0;

  for (let i = 0; i < backgroundSize; i++) {
    for (let j = 0; j < backgroundSize; j++) {
      if (background[i][j]) {
        areaSize++;
      }
    }
  }

  console.log(areaSize);
};

solution();

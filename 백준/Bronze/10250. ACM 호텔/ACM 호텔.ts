import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, ...values] = input.split("\n");

const result: string[] = [];

values.forEach((value) => {
  const [height, , order] = value.split(" ").map(Number);

  let floor = order % height === 0 ? height : order % height;
  let room = Math.ceil(order / height)
    .toString()
    .padStart(2, "0");

  result.push(`${floor}${room}`);
});

console.log(result.join("\n"));
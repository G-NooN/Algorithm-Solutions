import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const [, bus, subway] = input.split(" ").map(Number);

let result = "Anything";

console.log(bus === subway ? "Anything" : bus < subway ? "Bus" : "Subway");

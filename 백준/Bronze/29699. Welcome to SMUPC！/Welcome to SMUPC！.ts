import { readFileSync } from "fs";

const input = readFileSync(0).toString().trim();

const text = "WelcomeToSMUPC";
const index = (Number(input) - 1) % text.length;

console.log(text[index]);

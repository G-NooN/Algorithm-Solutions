const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const dog1 = "|\\_/|";
const dog2 = "|q p|   /}";
const dog3 = '( 0 )"""\\';
const dog4 = '|"^"`    |';
const dog5 = "||_/=\\\\__|";

const dog = [dog1, dog2, dog3, dog4, dog5].join("\n");
console.log(dog);
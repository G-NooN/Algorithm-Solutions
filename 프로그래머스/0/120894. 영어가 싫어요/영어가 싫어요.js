const numberArray = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(numbers) {
  const result = numberArray.reduce(
    (acc, letter, index) => acc.replaceAll(letter, index),
    numbers
  );

  return Number(result);
}
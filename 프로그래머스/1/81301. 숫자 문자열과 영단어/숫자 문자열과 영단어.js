function solution(s) {
  const engNumber = [
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

  engNumber.forEach((number, index) => (s = s.replaceAll(number, index)));

  return Number(s);
}
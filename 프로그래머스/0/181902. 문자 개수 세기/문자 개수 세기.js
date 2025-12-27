function solution(my_string) {
  const alphabets = Array.from({ length: 52 }, (_, index) =>
    String.fromCharCode(index < 26 ? 65 + index : 97 + index - 26)
  ).join("");

  const result = Array.from({ length: 52 }, () => 0);

  [...my_string].forEach((letter) => result[alphabets.indexOf(letter)]++);

  return result;
}
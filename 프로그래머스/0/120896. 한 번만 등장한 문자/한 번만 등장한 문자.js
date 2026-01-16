function solution(s) {
  const result = [];

  [...s].forEach((letter) => {
    if (s.indexOf(letter) === s.lastIndexOf(letter)) {
      result.push(letter);
    }
  });

  return result.sort().join("");
}
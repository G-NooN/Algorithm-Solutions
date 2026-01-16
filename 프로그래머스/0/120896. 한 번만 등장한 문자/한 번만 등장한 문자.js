function solution(s) {
  const stringMap = new Map();

  [...s].forEach((letter) => {
    stringMap.set(letter, (stringMap.get(letter) || 0) + 1);
  });

  const oneCountLetters = [...stringMap.keys()]
    .filter((letter) => stringMap.get(letter) === 1)
    .sort((a, b) => a.localeCompare(b));

  const result = "".concat(...oneCountLetters);

  return result;
}
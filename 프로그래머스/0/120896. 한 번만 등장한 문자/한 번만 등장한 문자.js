function solution(s) {
  const result = [...s].filter((letter) => {
    const regex = new RegExp(letter, "g");

    return s.match(regex).length === 1;
  });

  return result.sort().join("");
}
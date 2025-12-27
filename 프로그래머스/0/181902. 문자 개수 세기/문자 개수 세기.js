function solution(my_string) {
  const upperAlphabets = Array.from({ length: 26 }, () => 0);
  const lowerAlphabets = Array.from({ length: 26 }, () => 0);

  [...my_string].forEach((letter) => {
    const letterIndex = letter.charCodeAt(0);
    const upperIndex = letterIndex - "A".charCodeAt(0);
    const lowerIndex = letterIndex - "a".charCodeAt(0);

    if (upperIndex < 26) {
      upperAlphabets[upperIndex]++;
    }

    if (lowerIndex < 26) {
      lowerAlphabets[lowerIndex]++;
    }
  });

  const result = upperAlphabets.concat(lowerAlphabets);

  return result;
}
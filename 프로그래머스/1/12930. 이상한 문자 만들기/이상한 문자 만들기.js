function solution(s) {
  let answer = "";

  const words = s.split(" ");
  const result = words.map((word) => {
    let alphabetMixedWord = "";
    for (let i = 0; i < word.length; i++) {
      i % 2 === 0
        ? (alphabetMixedWord += word[i].toUpperCase())
        : (alphabetMixedWord += word[i].toLowerCase());
    }
    return alphabetMixedWord;
  });

  answer = result.join(" ");

  return answer;
}
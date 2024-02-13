function solution(s, n) {
  let answer = "";
  const letters = s.split("");
  const pushedLetters = letters.map((letter) => {
    const letterCode = letter.charCodeAt(0);
    // 대문자인 경우
    if (letterCode >= "A".charCodeAt(0) && letterCode <= "Z".charCodeAt(0)) {
      let pushedLetter = letterCode + n;
      if (pushedLetter > "Z".charCodeAt(0)) {
        pushedLetter -= 26;
      }
      return String.fromCharCode(pushedLetter);
    }
    // 소문자인 경우
    else if (letterCode >= "a".charCodeAt(0) && letterCode <= "z".charCodeAt(0)) {
      let pushedLetter = letterCode + n;
      if (pushedLetter > "z".charCodeAt(0)) {
        pushedLetter -= 26;
      }
      return String.fromCharCode(pushedLetter);
    }
    // 공백인 경우
    return " ";
  });

  answer = pushedLetters.join("");

  return answer;
}
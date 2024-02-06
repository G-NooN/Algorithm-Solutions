/*
  <문제(Lv. 1) - 시저 암호>

  어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 "시저 암호"라고 한다.

  예를 들어, "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 된다. "z"는 1만큼 밀면 "a"가 된다.

  문자열 s와 거리 n을 입력 받아 s를 n만큼 민 암호문을 return하는 solution 함수를 완성하라.

  [제한 조건]
  1. 공백은 아무리 밀어도 공백이다.
  2. s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있다.
  3. s의 길이는 8,000 이하다.
  4. n은 1 이상, 25 이하의 자연수다.
*/

/*
  [접근 방식]
  1. 입력값 : 문자열 s, 거리 n / 출력값 : s를 n만큼 민 문자열
  2. 반복문을 사용하여 각 문자마다 반복을 수행
  3. charCode을 사용함
    - 'A' : 65 / 'Z' : 90
    - 'a' : 97 / 'z' : 122
  4. 대문자의 charCode가 90을 넘어가거나, 소문자의 charCode가 122를 넘어가면 알파벳의 개수(26)만큼 뺀다.
*/

/*
  [해결 방법]
  1. split('') 메서드를 사용하여 문자열을 문자 배열로 분리한다.
  2. map() 메서드를 사용하여 각 문자마다 함수를 수행한다.
  3. 각 문자의 charCode에 따라 대문자 case / 소문자 case로 나눈다.
  4. 각 문자의 charCodeAt(0)에 n을 더한다.
  5. 더한 값의 charCode가 각 case의 최대치를 넘어서면 알파벳의 개수(26)만큼 뺀다.
  6. String.fromCharCode() 메서드를 사용하여 각 문자의 charCode를 문자로 변환한다.
  7. join('') 메서드를 사용하여 문자 배열을 문자열로 합친다.
*/

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

// console.log(solution("AB", 1));
// console.log(solution("z", 1));
// console.log(solution("a B z", 4));

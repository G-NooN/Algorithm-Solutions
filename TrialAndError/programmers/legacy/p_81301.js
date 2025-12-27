/*
  <문제(Lv. 1) - 숫자 문자열과 영단어>

  네오와 프로도는 숫자게임을 하고 있다.

  [숫자 게임]
  1. 네오는 프로도에게 건넬 숫자의 일부 자릿수를 영단어로 변경한다.
  - 각 숫자에 대응하는 영단어
  | 0 -> zero | 1 -> one | 2 -> two | 3 -> three | 4 -> four |
  | 5 -> five | 6 -> six | 7 -> seven | 8 -> eight | 9 -> nine |

  2. 네오가 프로도에게 변경된 카드를 포함하여 숫자를 건넨다.
  - 예시
  | 1478 : "one4seveneight" | 234567 : "23four5six7" | 10203 : "1zerotwozero3" |

  3. 프로도가 해당 영단어의 원래 숫자를 찾는다.
  
  위와 같은 방식으로, 숫자의 일부 자릿수가 영단어로 변경되었거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어졌을 때,
  s가 의미하는 원래의 숫자를 return하는 solution 함수를 완성하라.

  [제한 사항]
  1. 1 <= s의 길이 <= 50
  2. s는 "zero" 또는 "0"으로 시작하지 않는다.
  3. return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어진다.
*/

/*
  [접근 방식]
  1. 입력값 : 영단어와 숫자가 합쳐진 문자열 / 출력값 : 원래의 숫자
  2. 각 숫자에 해당하는 문자열 배열을 선언한다.
  3. 각 요소에 해당하는 문자열을 발견한 경우, 해당 문자열을 인덱스로 변경한다.
  4. 결과값을 반환한다.
*/

/*
  [해결 방법]
  1. 0~9까지의 영어 문자열을 선언한다.
  2. forEach문을 사용하여 0~9를 순회한다
  3. 0~9를 순회하며 s에서 0~9에 해당하는 영단어를 발견하면 replaceAll()을 사용하여 해당 단어를 인덱스(0~9)로 변경한다.
  4. 숫자 형태의 문자열을 반환한다.
*/

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

// console.log(solution("one4seveneight")); // 1478
// console.log(solution("23four5six7")); // 234567
// console.log(solution("2three45sixseven")); // 234567
// console.log(solution("123")); // 123

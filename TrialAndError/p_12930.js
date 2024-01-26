/*
  <문제(Lv. 1) - 이상한 문자 만들기>

  한 개 이상의 단어로 구성된 문자열 s가 주어졌을 때,
  각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 변경하여 return하는 solution 함수를 완성하라.

  [제한 사항]
  1. 각 단어는 하나 이상의 공백문자로 구분되어 있다.
  2. 문자열 전체의 짝/홀수 index가 아닌, 단어(공백을 기준)별로 짝/홀수 index를 판단해야 한다.
  3. 첫번째 글자는 0번째 index로, 짝수번째 알파벳으로 처리한다.
*/

/*
  [접근 방식]
  1. 입력값: 문자열 s / 출력값: 짝수/홀수번째 index의 알파벳이 각각 대/소문자로 처리된 문자열
  2. 공백을 기준으로 각 단어를 분리한다.
  3. 단어의 개수만큼 반복을 수행한다.
  4. 각 단어의 길이만큼 반복문을 수행하여, 짝/홀수번째 index의 알파벳을 처리한다.
  5. 처리한 결과값을 다시 합친다.
  6. 결과를 출력한다.

*/

/*
  [해결 방법]
  1. split(' ')을 사용하여 문자열을 단어 배열로 변환한다.
  2. map()을 사용하여 단어 배열의 모든 요소에 동일한 작업을 수행한다.
    - 각 단어의 길이만큼 반복문을 수행한다.
      - index가 짝수면, 단어의 해당 index의 문자를 대문자로 변환하고,
        index가 홀수면, 단어의 해당 index의 문자를 소문자로 변환한다.
  3. join(' ')을 사용하여 map()을 사용한 결과 배열을 합친 문자열을 반환한다.
*/

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

// console.log(solution(" try hello world "));

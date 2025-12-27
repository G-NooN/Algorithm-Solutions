/*
  <문제(Lv. 1) - K번째 수>

  배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 숫자를 구하려고 한다.

  예를 들어, array = [1,5,2,6,3,7,4], i = 2, j = 5, k = 3이면,
  k는 배열 [5,2,6,3]을 정렬한 배열 [2,3,5,6]의 3번째 숫자이므로 5가 된다.

  (1) 배열 array / (2) [i,j,k]를 원소로 가지는 2차원 배열 commands가 매개변수로 주어졌을 때,
  commands의 모든 원소에 대해 연산을 수행한 결과를 배열에 담아 return하는 solution 함수를 완성하라.

  [제한 사항]
  1. array의 길이는 1 이상 100 이하다.
  2. array의 각 원소는 1 이상 100 이하다.
  3. commands의 길이는 1 이상 50 이하다.
  4. commands의 각 원소의 길이는 3이다.
*/

/*
  [입력값 / 출력값]
  1. 입력값 : 배열, [i,j,k]를 가지는 배열
  2. 출력값 : 각 요소의 연산 결과를 가지는 배열

  [필요한 변수]
  1. commands의 각 요소의 [i,j]에 해당하는 연산을 수행한 배열
  2. 정렬된 배열에서 추출한 k
*/

/*
  [접근 방식]
  1. commands의 배열을 순회
  - commands의 길이만큼 결과가 출력되기 때문에 commands.map()을 이용
  2. array에서 각 요소의 i~j번째 index에 해당하는 배열을 추출 (slice 메서드 활용)
  - 주의! 문제에서는 0번째가 아닌 1번째부터 시작함
  3. 추출한 배열을 정렬 (sort 메서드 활용)
  4. 정렬한 배열에서 k번째 index의 수를 return
*/

function solution(array, commands) {
  let answer = [];

  // item : 각 command 요소 [i,j,k]
  answer = commands.map((item) => {
    let subArray = array.slice(item[0] - 1, item[1]).sort((a, b) => a - b);
    let foundNum = subArray[item[2] - 1];
    return foundNum;
  });

  return answer;
}

// const array = [1, 5, 2, 6, 3, 7, 4];
// const commands = [
//   [2, 5, 3],
//   [4, 4, 1],
//   [1, 7, 3],
// ];

// console.log(solution(array, commands));

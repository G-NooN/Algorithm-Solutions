/*
  <문제(Lv. 1) - 행렬의 덧셈>

  행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더하는 것이다.
  2개의 행렬 arr1과 arr2가 주어졌을 때, 두 행렬의 덧셈 결과를 return하는 solution 함수를 완성하라.

  [제한 사항]
  1. arr1, arr2의 행과 열의 길이는 500을 넘지 않는다.
*/

/*
  [접근 방식]
  1. 입력값 : 행렬 2개 / 출력값 : 두 행렬의 각 요소를 합한 행렬
  2. 행렬의 형태
    arr[0] : arr[0][0], arr[0][1], ...
    arr[1] : arr[1][0], arr[1][1], ...
    ...
  3. 중첩 for문을 사용하여 행렬의 값을 합산한다.
    arr[0] -> arr[1] -> ...
    arr[0][0] -> arr[0][1] -> ...
*/

/*
  [해결 방법]
  1. 행을 순회한다.
  1-1. 행이 존재하지 않으면, 초기화한다.
  2. 열을 순회한다.
  2-1. answer의 행에 값을 push한다.
  3. 결과를 출력한다.
*/

// let arr1_1 = [
//   [1, 2],
//   [3, 4],
// ];
// let arr2_1 = [
//   [3, 4],
//   [5, 6],
// ];
// let arr1_2 = [[1], [2]];
// let arr2_2 = [[3], [4]];

function solution(arr1, arr2) {
  let answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    // 현재 answer가 answer[0]만 초기화되어 있기 때문에, answer[i]를 추가로 초기화시켜야 함
    if (!answer[i]) answer.push([]);
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }

  return answer;
}

// console.log(solution1(arr1_1, arr2_1));
// console.log(solution1(arr1_2, arr2_2));

/* -------------------- */

// 초기 코드
function solution1(arr1, arr2) {
  let answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    // if (answer[i] === undefined) answer.push([]);
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
      // answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }

  return answer;
}

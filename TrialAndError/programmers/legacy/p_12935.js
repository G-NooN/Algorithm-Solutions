/*
  <문제(Lv. 1) - 제일 작은 수 제거하기>

  정수 배열 arr에서 가장 작은 수를 제거한 배열을 return하는 solution 함수를 완성하라.

  단, return하려는 배열이 빈 배열인 경우, 배열에 -1을 채워서 return하라.

  예를 들어, arr이 [4,3,2,1]인 경우에는 [4,3,2]를 return하고, [10]이면 [-1]을 return한다.

  [제한 사항]
  1. arr은 길이가 1 이상인 배열이다.
  2. 인덱스 i, j에 대해 i != j 이면 arr[i] != arr[j]다.
*/

/*
  [접근 방식]
  1. 입력값: 정수 배열 / 출력값: 가장 작은 수를 제거한 정수 배열
  2. 가장 작은 수의 index를 구할 변수를 선언한다.
  3. 배열을 순회하면서 가장 작은 수를 가진 index를 찾는다.
  4. 해당 index의 요소를 제거한다.
  5. 제거한 결과를 반환한다
  5-1. 만일, 제거한 결과 배열의 길이가 0이면 [-1]을 출력한다.
*/

// let arr1 = [4, 3, 2, 1];
// let arr2 = [10];

function solution(arr) {
  let answer = [];
  let minIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[minIndex]) {
      minIndex = i;
    }
  }

  arr.splice(minIndex, 1);
  answer = arr.length > 0 ? arr : [-1];

  return answer;
}

// console.log(solution(arr1));
// console.log(solution(arr2));

/* ---------- */

// 개선 방안
function solution1(arr) {
  let answer = [];

  // ...arr에서 작은 수를 구하고, 해당 수의 인덱스를 구함
  let minIndex = arr.indexOf(Math.min(...arr));

  // 해당 수의 index를 제거함
  arr.splice(minIndex, 1);

  answer = arr.length === 0 ? [-1] : arr;

  return answer;
}

// console.log(solution1(arr1));
// console.log(solution1(arr2));

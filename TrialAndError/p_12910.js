/*
  <문제(Lv. 1) - 나누어 떨어지는 숫자 배열>

  배열 arr와 숫자 divisor가 주어졌을 때,
  arr의 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 return하는 solution 함수를 완성하라.

  divisor로 나누어 떨어지는 element가 하나도 존재하지 않는 경우, 배열에 -1을 담아서 return하라.

  [제한 사항]
  1. arr는 자연수를 담은 배열이다.
  2. arr는 길이가 1 이상인 배열이다.
  3. 정수 i, j에 대해, i !== j 이면 arr[i] !== arr[j]이다.
  4. divisor는 자연수다. 

  [입출력 예시]
  [arr | divisor]
  [[5,9,7,10] | 5]  => [5,10]
  [2,36,1,3] | 1]   => [1,2,3,36]
  [3,2,6] | 10]     => [-1]
  */

/*
  [해결 방법]
  1. Array.filter()를 사용하여 divisor로 나누어 떨어지는 element만 추출한다.
  2. dividedArray의 길이가 0이면 [-1]을 출력하고, 0이 아니면 Array.sort()를 사용하여 오름차순으로 정렬한다.
*/

// let arr1 = [5, 9, 7, 10];
// let arr2 = [2, 36, 1, 3];
// let arr3 = [3, 2, 6];

function solution(arr, divisor) {
  let answer = [];

  let dividedArray = arr.filter((element) => {
    element % divisor === 0;
  });

  answer = dividedArray.length === 0 ? [-1] : dividedArray.sort((a, b) => a - b);

  return answer;
}

// console.log(solution(arr1, 5));
// console.log(solution(arr2, 1));
// console.log(solution(arr3, 10));

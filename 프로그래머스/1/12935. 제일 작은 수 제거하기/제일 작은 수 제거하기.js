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
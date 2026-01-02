function solution(arr) {
  let result = [];

  arr.forEach((value) => {
    value !== result[result.length - 1] ? result.push(value) : result.pop();
  });

  return result.length ? result : [-1];
}
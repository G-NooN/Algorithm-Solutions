function solution(arr) {
  let result = [];

  arr.forEach((value) => {
    if (!result.length) {
      result.push(value);
    } else {
      [...result].pop() === value ? result.pop() : result.push(value);
    }
  });

  return result.length ? result : [-1];
}
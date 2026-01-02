function solution(arr, flag) {
  let result = [];

  arr.forEach((value, index) => {
    if (flag[index]) {
      result = [...result, ...Array.from({ length: value * 2 }, () => value)];
    } else {
      result = result.slice(0, -value);
    }
  });

  return result
}
function solution(arr, query) {
  let result = [...arr];

  query.forEach((value, index) => {
    result = index % 2 === 0 ? result.slice(0, value + 1) : result.slice(value);
  });

  return result;
}
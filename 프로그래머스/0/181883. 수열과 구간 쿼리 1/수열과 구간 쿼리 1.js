function solution(arr, queries) {
  let result = [...arr];

  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      result[i]++;
    }
  });

  return result;
}
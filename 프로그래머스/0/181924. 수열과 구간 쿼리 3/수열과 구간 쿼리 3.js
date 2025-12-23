function solution(arr, queries) {
  let temp = 0;
  const result = [...arr];

  queries.forEach((query) => {
    const [i, j] = query;

    temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  });

  return result;
}
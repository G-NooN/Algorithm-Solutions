function solution(num_list) {
  const result = num_list.reduce(
    (acc, value) => {
      let [evenCount, oddCount] = acc;

      value % 2 === 0 ? evenCount++ : oddCount++;

      return [evenCount, oddCount];
    },
    [0, 0]
  );

  return result;
}
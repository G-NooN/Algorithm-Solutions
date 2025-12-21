function solution(num_list) {
  const { multiple, sum } = num_list.reduce(
    (acc, value) => ({
      multiple: acc.multiple * value,
      sum: acc.sum + value,
    }),
    { multiple: 1, sum: 0 }
  );

  return Number(multiple < Math.pow(sum, 2));
}
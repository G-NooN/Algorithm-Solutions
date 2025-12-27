function solution(num_list) {
  const oddIndexSum = num_list
    .filter((_, index) => index % 2 === 0)
    .reduce((acc, value) => acc + value, 0);
  const evenIndexSum = num_list
    .filter((_, index) => index % 2 !== 0)
    .reduce((acc, value) => acc + value, 0);

  return oddIndexSum > evenIndexSum ? oddIndexSum : evenIndexSum;
}
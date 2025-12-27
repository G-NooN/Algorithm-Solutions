function solution(num_list) {
  let [oddIndexSum, evenIndexSum] = [0, 0];

  num_list.forEach((value, index) => {
    index % 2 === 0 ? (evenIndexSum += value) : (oddIndexSum += value);
  });

  return Math.max(oddIndexSum, evenIndexSum);
}
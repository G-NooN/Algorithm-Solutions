function solution(l, r) {
  const result = [];

  let binaryNum = 1;

  while (true) {
    const binaryNumText = binaryNum.toString(2);
    const value = parseInt(binaryNumText, 10) * 5;

    if (value > r) break;
    if (value >= l) result.push(value);

    binaryNum++;
  }

  return result.length ? result : [-1];
}
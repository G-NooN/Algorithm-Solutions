function solution(n) {
  const result = [n];

  let lastValue = [...result].pop();

  while (lastValue !== 1) {
    result.push(lastValue % 2 === 0 ? lastValue / 2 : lastValue * 3 + 1);

    lastValue = [...result].pop();
  }

  return result;
}
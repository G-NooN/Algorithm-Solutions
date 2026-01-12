function solution(numbers) {
  const [a, b] = numbers.sort((a, b) => a - b).slice(-2);
  return a * b;
}
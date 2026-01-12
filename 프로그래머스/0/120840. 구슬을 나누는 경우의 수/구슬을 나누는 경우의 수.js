function solution(balls, share) {
  let [dividend, divisor] = [1, 1];

  for (let i = balls; i > balls - share; i--) {
    dividend *= i;
  }

  for (let i = share; i > 0; i--) {
    divisor *= i;
  }

  return Math.floor(dividend / divisor);
}
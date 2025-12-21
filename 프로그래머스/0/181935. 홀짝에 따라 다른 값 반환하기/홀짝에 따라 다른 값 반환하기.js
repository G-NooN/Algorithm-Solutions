function solution(n) {
  let result = 0;

  if (n % 2 === 0) {
    result = (n * (n + 1) * (n + 2)) / 6;
  } else {
    result = Math.pow((n+1)/2, 2)
  }

  return result;
}
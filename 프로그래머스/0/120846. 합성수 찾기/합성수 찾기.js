function solution(n) {
  let result = 0;

  for (let i = 4; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }

    if (count > 2) {
      result++;
    }
  }

  return result;
}
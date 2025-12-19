function solution(n) {
  let result = 0;

  if (n % 2 === 0) {
    for (let i = 2; i <= n; i = i + 2) {
      result += Math.pow(i, 2);
    }
  } else {
    for (let i = 1; i <= n; i = i + 2) {
      result += i;
    }
  }
    
    return result
}
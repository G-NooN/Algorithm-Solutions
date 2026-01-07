function solution(n) {
  const getGcd = (dividend, divisor) => {
    if (divisor === 0) return dividend;
    return getGcd(divisor, dividend % divisor);
  };

  return n / getGcd(n, 6);
}
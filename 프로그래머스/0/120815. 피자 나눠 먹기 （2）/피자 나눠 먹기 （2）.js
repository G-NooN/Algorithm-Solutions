function solution(n) {
  const getGcd = (dividend, divisor) =>
    divisor === 0 ? dividend : getGcd(divisor, dividend % divisor);

  return n / getGcd(n, 6);
}
function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + denom1 * numer2;
  const denom = denom1 * denom2;

  const getGcd = (dividend, divisor) => {
    if (divisor === 0) return dividend;
    return getGcd(divisor, dividend % divisor);
  };

  const gcdValue = getGcd(numer, denom);

  return [numer / gcdValue, denom / gcdValue];
}
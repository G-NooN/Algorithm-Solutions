function solution(a, b, c, d) {
  const array = [a, b, c, d];
  const arraySet = new Set(array);

  if (arraySet.size === 1) {
    return 1111 * a;
  }

  if (arraySet.size === 2) {
    const targetValue = array.find(
      (value) => array.filter((v) => v === value).length === 3
    );

    if (targetValue) {
      const otherValue = array.find((value) => value !== targetValue);
      const result = Math.pow(10 * targetValue + otherValue, 2);

      return result;
    } else {
      const [a, b] = [...arraySet];
      const result = (a + b) * Math.abs(a - b);

      return result;
    }
  }

  if (arraySet.size === 3) {
    const targetValue = array.find(
      (value) => array.filter((v) => v === value).length === 2
    );

    const result = array
      .filter((value) => value !== targetValue)
      .reduce((acc, value) => acc * value, 1);

    return result;
  }

  if (arraySet.size === 4) {
    return Math.min(...arraySet);
  }
}
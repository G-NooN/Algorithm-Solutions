function solution(a, b, c) {
  const array = [a, b, c];
  const set = new Set(array);

  const calculatePowSum = (powMax) => {
    let result = 1;

    for (let i = 1; i <= powMax; i++) {
      result *= array.reduce((acc, value) => acc + Math.pow(value, i), 0);
    }

    return result;
  };

  switch (set.size) {
    case 3:
      return calculatePowSum(1);
    case 2:
      return calculatePowSum(2);
    case 1:
      return calculatePowSum(3);
  }
}
function solution(a, d, included) {
  const includedIndexArray = included
    .map((value, index) => {
      if (value) return index;
    })
    .filter((value) => !isNaN(value));

  const indexSum = includedIndexArray.reduce((acc, value) => acc + value);

  const result = a * includedIndexArray.length + d * indexSum;

  return result;
}
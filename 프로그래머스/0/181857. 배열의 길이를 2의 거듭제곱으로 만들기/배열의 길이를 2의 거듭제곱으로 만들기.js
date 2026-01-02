function solution(arr) {
  const targetLength = Math.pow(2, Math.ceil(Math.log2(arr.length)));

  return [
    ...arr,
    ...Array.from({ length: targetLength - arr.length }, () => 0),
  ];
}
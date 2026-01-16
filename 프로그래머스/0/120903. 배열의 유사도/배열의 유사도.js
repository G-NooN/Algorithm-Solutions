function solution(s1, s2) {
  const result = s1.filter((value) => s2.includes(value));

  return result.length;
}
function solution(str1, str2) {
  const result = [...str1].map((letter, index) => letter + str2[index]);

  return result.join('')
}
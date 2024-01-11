function solution(numbers) {
  let answer = 0; // 배열에 없는 숫자의 합
  let sum0to9 = 45; // 0+1+2+3+4+5+6+7+8+9

  for (let i = 0; i < numbers.length; i++) {
    sum0to9 -= numbers[i];
  }

  answer = sum0to9;

  return answer;
}
function solution(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) continue;
    else {
      answer.push(i);
    }
  }
  return answer;
}

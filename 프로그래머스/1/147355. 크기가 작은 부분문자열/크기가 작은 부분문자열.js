function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let subArray = t.substring(i, i + p.length);

    if (Number(subArray) <= Number(p)) answer++;
  }

  return answer;
}
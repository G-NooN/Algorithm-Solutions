function solution(num) {
  let answer = 0; 

  while (answer < 500) {
    if (num === 1) break;
    else num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    answer++;
  }
    
  if (num !== 1) answer = -1;

  return answer;
}
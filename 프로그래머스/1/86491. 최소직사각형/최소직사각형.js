function solution(sizes) {
  let answer = 0; // 지갑의 크기

  let maxWidth = 0; // 지갑의 너비
  let maxHeight = 0; // 지갑의 높이

  // 각 명함 순회
  sizes.forEach(([w, h]) => {
    // 각 명함의 긴 부분, 짧은 부분을 변수로 선언
    const longerLength = Math.max(w, h);
    const shorterLength = Math.min(w, h);

    // 각 명함을 돌며, 가장 긴 부분과 짧은 부분의 최대값을 최신화
    maxWidth = Math.max(longerLength, maxWidth);
    maxHeight = Math.max(shorterLength, maxHeight);
  });

  // 지갑의 너비 = 긴 부분의 최대값 * 짧은 부분의 최대값
  answer = maxWidth * maxHeight;

  // 결과 출력
  return answer;
}
function solution(n) {
    let answer = 0; // true/false
    
    // n이 "양의 정수"의 제곱수 (양의 정수 : % 1 === 0)
    answer = Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
    
    return answer;
}

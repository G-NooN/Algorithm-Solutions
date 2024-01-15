function solution(a, b) {
    let answer = 1234567890;
    
    answer = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);

    return answer;
}
function solution(s) {
    let answer = '';
    let centerIdx = Math.floor(s.length / 2);
    
    answer = s.length % 2 === 0 ? s.slice(centerIdx - 1, centerIdx + 1) : s.slice(centerIdx, centerIdx + 1);

    return answer;
}
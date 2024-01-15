function solution(left, right) {
    let answer = 0;
    
    function divisorCount(num) {
        let divisorCount = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) divisorCount++;
        }
        return divisorCount;
    }
    
    for (let i = left; i <= right; i++) {
        divisorCount(i) % 2 === 0 ? answer += i : answer -= i;
    }
    
    return answer;
}
function solution(n) {
    let answer = 0; // 합계
    
    for(let i=1; i<=n; i++) {
        // 약수 = n % i === 0
        if(n % i === 0) {
            answer += i;
        }
    }
    
    return answer;
}
function solution(n, m) {
    let answer = [];
    let gcd = 0;
    let lcm = 0;
    
    for (let i = 1; i <= Math.min(n, m); i++) {
        if(n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }
    
    lcm = (m * n) / gcd;
    
    answer = [gcd, lcm];
    
    return answer;
}
function solution(n) {
    let answer = 0; // 나머지가 1이 되는 가장 작은 자연수
    
    for(let i=1; i<n; i++) {
        if(n % i === 1) {
            answer = i;
            break;  // 가장 작은 수를 발견했으면 뒤는 볼 것도 없음
        }
    }
    
    return answer;
}
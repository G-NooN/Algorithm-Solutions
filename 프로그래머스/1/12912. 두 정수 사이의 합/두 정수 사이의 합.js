// 1. if (a < b) : a부터 b까지 반복하며 합계에 더함
// 2. if (a > b) : b부터 a까지 반복하며 합계에 더함
// 3. if (a === b) : a 또는 b 그 자체가 합계

function solution(a, b) {
    let answer = 0;
    
    if(a < b){
        for (let i=a; i<=b; i++) {
            answer += i;
        }
    } else if(a > b){
        for (let i=b; i<=a; i++) {
            answer += i;
        }
    } else {
        answer = a; // b도 상관없음
    }
    
    return answer;
}
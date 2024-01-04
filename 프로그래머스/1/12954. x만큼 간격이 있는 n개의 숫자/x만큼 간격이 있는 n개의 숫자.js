function solution(x, n) {
    let answer = [];    // x부터 x씩 증가하는 n개의 배열
    
    // x를 n번 더한다 => x의 배수다
    for(let i=1; i<=n; i++){
        answer.push(i*x);
    }
    
    return answer;
}


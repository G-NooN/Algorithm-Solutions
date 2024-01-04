function solution(n) {
    let answer = [];
    let stringN = String(n);
    
    for(let i=stringN.length-1; i>=0; i--){
        answer.push(Number(stringN[i]));
    }
    
    return answer;
}
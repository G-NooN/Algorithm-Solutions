function solution(n)
{
    let answer = 0;
    let stringN = String(n);    // n을 문자열화 (ex. "123")
    
    // stringN의 각 문자를 다시 숫자로 변환하여 answer에 더함 (ex. 1+2+3)
    for(let i=0; i<stringN.length; i++) {
        answer += Number(stringN[i]);
    }
    
    return answer;
}
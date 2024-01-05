// 1. 각 자릿수의 합계 변수 선언
// 2. x를 문자열로 변경
// 3. 문자열의 길이만큼 반복
// 3-1. 각 자릿수의 값을 숫자 타입으로 변환하여 합계에 더함
// 4. if (x % 합계 !== 0) return false;   // 나머지 존재하면 하샤드 수 x

function solution(x) {
    let answer = true;  // 하샤드 수 여부 T/F
    let sum = 0;    // 각 자릿수의 합계
    
    for (let i=0; i<String(x).length; i++) {
        sum += Number(String(x)[i]);
    }
    
    if (x % sum !== 0) answer = false;
    
    return answer;
}
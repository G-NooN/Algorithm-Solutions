function solution(s){
    // 대소문자 통일 (소문자 -> 대문자)
    s = s.toUpperCase();
    
    // p와 y의 개수를 count할 변수
    let alphabetCount = 0;

    // p를 발견하면 개수++, y를 발견하면 개수--
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "P") alphabetCount++;
        if (s[i] === "Y") alphabetCount--;
    }

    // p와 y의 개수가 동일하면 0, 다르면 양수 or 음수
    let answer = alphabetCount === 0 ? true : false;

    return answer;
}
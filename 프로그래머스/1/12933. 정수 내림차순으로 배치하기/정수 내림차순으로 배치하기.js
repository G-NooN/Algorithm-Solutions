// 1. 숫자를 문자열로 변경(String())
// 2. 문자열의 각 문자를 분할(String.split('')) -> return 값: 배열 형태
// 3. 각 문자를 오름차순으로 정렬(Array.sort())
// 4. 오름차순으로 정렬된 배열을 뒤집음(Array.reverse())
// 5. 배열의 모든 요소를 합침(Array.join(''))
// 6. 문자열을 숫자로 변경(Number())

function solution(n) {
    let answer = 0; // 정렬된 숫자
    
    answer = Number(String(n).split('').sort().reverse().join(''));
    
    return answer;
}
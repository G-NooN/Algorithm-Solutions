function solution(numbers) {
    let answer = 0; // 평균값
    let sum = 0;    // 합계
    
    for(let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    // 평균 = 합계 / 요소 개수
    answer = sum / numbers.length;
    
    return answer;
}
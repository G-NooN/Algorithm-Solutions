function solution(arr) {
    let answer = 0;
    let sum = 0;
    
    arr.forEach((s) => {
        sum += s;
    })
    
    answer = sum / arr.length;
    
    return answer;
}
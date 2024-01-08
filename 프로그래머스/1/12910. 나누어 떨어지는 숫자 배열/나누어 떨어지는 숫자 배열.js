function solution(arr, divisor) {
    let answer = [];
    
    let dividedArray = arr.filter((element) => element % divisor === 0);
    
    answer = dividedArray.length === 0 ? [-1] : dividedArray.sort((a, b) => a - b);
    
    return answer;
}
function solution(arr, divisor) {
    let answer = [];
    
    let dividedArray = arr.filter((element) => {
        return element % divisor === 0;
    });
    
    if(dividedArray.length === 0) {
        answer = [-1];
    } else {
        answer = dividedArray.sort((a,b) => a - b);
    }
    
    return answer;
}
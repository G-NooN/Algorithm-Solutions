function solution(array) {
    let answer = 0;
    let sortedArray = array.sort((a, b) => a - b);
    
    answer = sortedArray[Math.floor(sortedArray.length / 2)];
    
    return answer;
}
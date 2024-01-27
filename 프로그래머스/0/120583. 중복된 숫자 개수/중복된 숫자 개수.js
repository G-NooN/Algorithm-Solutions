function solution(array, n) {
    let answer = 0;
    
    answer = array.filter((element) => element === n).length;
    
    return answer;
}
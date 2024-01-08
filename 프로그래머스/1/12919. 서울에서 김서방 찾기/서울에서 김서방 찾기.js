function solution(seoul) {
    let answer = '';
    let kimIndex = 0;
    
    for(let i=0; i<seoul.length; i++) {
        if(seoul[i] === "Kim") {
            kimIndex = i;
        }
    }
    
    answer = `김서방은 ${kimIndex}에 있다`
    
    return answer;
}
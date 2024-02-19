function solution(array, commands) {
    let answer = [];
    
    answer = commands.map((item) => {
        let subArray = array.slice(item[0] - 1, item[1]).sort((a, b) => a - b);
        let foundNum = subArray[item[2] - 1];
        return foundNum;
    });
    
    return answer;
}
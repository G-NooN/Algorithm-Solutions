function solution(n) {
    let answer = 0;
    const ternaryN = n.toString(3);
    const reverseTernaryN = String(ternaryN).split('').reverse().join('');
    
    answer = parseInt(reverseTernaryN, 3);
    
    return answer;
}
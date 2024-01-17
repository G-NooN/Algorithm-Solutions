function solution(price, money, count) {
    let answer = -1;
    let totalPrice = 0;
    
    for (let i = 1; i <= count; i++) {
        totalPrice += i * price;
    }
    
    answer = totalPrice - money > 0 ? totalPrice - money : 0;
    
    return answer;
}
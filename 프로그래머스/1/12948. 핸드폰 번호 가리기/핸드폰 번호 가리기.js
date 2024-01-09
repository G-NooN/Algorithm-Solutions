function solution(phone_number) {
    let answer = '';
    let stars = '';
    
    for(let i=0; i<phone_number.length-4; i++) {
        stars += '*';
    }
    
    answer = stars.concat(phone_number.substring(phone_number.length - 4))
    
    return answer;
}
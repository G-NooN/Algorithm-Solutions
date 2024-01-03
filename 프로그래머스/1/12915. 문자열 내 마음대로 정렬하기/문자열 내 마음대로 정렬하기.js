function solution(strings, n) {
    let answer = [];

    // n번째 글자를 각 원소의 제일 앞 글자로 추가
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }

    // 배열을 사전순으로 정렬
    strings.sort();

    // 각 원소의 제일 앞글자 제거
    for (let j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0], "");
        // 최종 answer 배열에 입력
        answer.push(strings[j]);
    }

    return answer;
}
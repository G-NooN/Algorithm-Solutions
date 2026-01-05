function solution(num_str) {
    return [...num_str].reduce((acc, value) => acc + Number(value), 0);
}
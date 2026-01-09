function solution(my_string, n) {
    return [...my_string].map((value) => value.repeat(n)).join("");
}
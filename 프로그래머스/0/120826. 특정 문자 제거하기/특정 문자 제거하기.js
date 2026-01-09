function solution(my_string, letter) {
    return [...my_string].filter((value) => value !== letter).join("");
}
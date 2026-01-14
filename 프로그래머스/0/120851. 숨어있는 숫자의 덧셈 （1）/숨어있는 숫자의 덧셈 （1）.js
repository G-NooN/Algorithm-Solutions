function solution(my_string) {
    return my_string.match(/\d/g).reduce((acc, value) => acc + Number(value), 0);
}
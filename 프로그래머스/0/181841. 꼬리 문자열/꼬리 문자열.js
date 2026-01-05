function solution(str_list, ex) {
    return str_list.filter((value) => !value.includes(ex)).join("");
}
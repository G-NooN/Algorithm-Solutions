function solution(n) {
    return Array.from({ length: Math.ceil(n / 2) }, (_, index) => 2 * index + 1);
}
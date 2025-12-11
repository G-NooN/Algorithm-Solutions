/**
 * NOTE - 채점 환경
 * - 백준 : linux (ubuntu)
 * - 맥북 : darwin
 *
 * => linux 인 경우 0 (= stdin) 사용 (공식: /dev/stdin)
 * => darwin 인 경우 ./input.txt 사용
 *
 * NOTE - input 처리
 * - 기본값 : Buffer 객체
 * - 처리 1 : toString() (Buffer -> String)
 * - 처리 2 : trim() (앞뒤 공백 제거)
 */

import { readFileSync } from "fs";

// const input = readFileSync(0).toString().trim();
const input = readFileSync("./input.txt").toString().trim();

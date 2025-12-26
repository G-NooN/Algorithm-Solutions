## Intro

- [백준](https://www.acmicpc.net/) & [프로그래머스](https://school.programmers.co.kr/learn/challenges) 문제풀이 코드 저장소

### Structure

- `백준`, `프로그래머스` : Solved Problem Auto Update (by BaekjoonHub)
- `TrialAndError` : Code Review
  - `b` : 백준 / `p` : 프로그래머스

### 개발 환경

- 백준 : **TypeScript**
- 프로그래머스 : **JavaScript**

### Test Code Setup

1. `input.txt` 에 예제 작성
2. `test-code` 파일에서 `readFileSync` 로 입력값 import

> **채점 환경**
>
> - 백준 : `linux (ubuntu)`
> - 프로그래머스 : `linux (ubuntu)`
> - 맥북 : `darwin`
>
> => linux 인 경우 `0 (= stdin)` 사용 (공식: `/dev/stdin`)
> => darwin 인 경우 `./input.txt` 사용

> **input 처리**
>
> - 기본값 : `Buffer` 객체
> - 처리 1 : `toString()` (Buffer -> String)
> - 처리 2 : `trim()` (앞뒤 공백 제거)

1. 테스트 방법
   1. Code Runner (실행 : `Ctrl + Alt + N` / 종료 : `Ctrl + Alt + M`)
   2. Terminal (실행 : `node 파일명`)
2. 특이사항

   1. 프로그래머스

      - 실제 채점 환경

        - input : 타입과 함께 사전 정의됨
        - output : 단순 return

          ```javascript
          function solution(input) {
            return output;
          }
          ```

      - IDE 환경

        - input : 별도로 정의 필요
        - output : console 로 return

          ```javascript
          const input = "";

          function solution() {
            return output;
          }

          console.log(solution());
          ```

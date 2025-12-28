/**
 * <Serca>
 *
 * - 레벨 : Bronze V
 * - 링크 : https://www.acmicpc.net/problem/26766
 */

// NOTE - 공통 상위 코드
import { readFileSync } from "fs";
const input = readFileSync("./input.txt").toString().trim();

/**
 * NOTE - 1st Trial (Success)
 * - 포인트
 * : 텍스트 배열 생성 후 join() 사용
 */

const pastSolution = () => {
  const text = ` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @    `;

  const result = Array.from({ length: Number(input) }, () => text);

  console.log(result.join("\n"));
};

/**
 * NOTE - 2nd Trial (Success)
 * - 포인트
 * : ` 로 줄바꿈 적용 후 repeat() 사용
 * - 효과
 * : 메모리 & 시간 감소 (메모리 : 44876 KB -> 30240 KB / 시간 : 196 ms -> 108 ms)
 */

const solution = () => {
  console.log(
    ` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @    
`.repeat(Number(input))
  );
};

solution();

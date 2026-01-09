function solution(angle) {
  if (angle !== 90 && angle !== 180) {
    return angle > 90 ? 3 : 1;
  } else return angle === 90 ? 2 : 4;
}
import { readFileSync } from "fs";

// 1. 입력 받기
const input = readFileSync("/dev/stdin").toString().trim();
let n = Number(input);

if (n === 1) {
  // 종료
} else {
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      console.log(i); // 나누는 수(소인수) 출력
      n /= i;
    }
  }

  if (n > 1) {
    console.log(n);
  }
}

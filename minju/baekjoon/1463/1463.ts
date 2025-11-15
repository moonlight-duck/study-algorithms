/**
 * 카테고리 : DP
 * 문제 : https://www.acmicpc.net/problem/1463
 */
import { readFileSync } from "fs";

const N = Number(readFileSync("/dev/stdin").toString().trim());

const DP: number[] = Array.from({ length: N + 1 });

DP[0] = 0;
DP[1] = 0; // 1일때 계산할 부분이 없음으로, 연산 횟수 0
DP[2] = 1;
DP[3] = 1;

for (let i = 4; i <= N; i++) {
  DP[i] = 1 + DP[i - 1];
  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i], 1 + DP[i / 3]);
  }
  if (i % 2 == 0) {
    DP[i] = Math.min(DP[i], 1 + DP[i / 2]);
  }
}

console.log(DP[N]);

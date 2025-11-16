/**
 * 카테고리 : DP
 * 문제 : https://www.acmicpc.net/problem/2839
 */

import { readFileSync } from "fs";
const N = Number(readFileSync("/dev/stdin").toString().trim());
const DP: number[] = Array.from({ length: N + 1 }, () => Infinity);

DP[0] = 0;

for (let i = 1; i < N + 1; i++) {
  if (i >= 3) {
    DP[i] = Math.min(DP[i], DP[i - 3] + 1);
  }
  if (i >= 5) {
    DP[i] = Math.min(DP[i], DP[i - 5] + 1);
  }
}

if (DP[N] === Infinity) {
  console.log(-1);
} else {
  console.log(DP[N]);
}

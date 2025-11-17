/**
 * 카테고리 : DP
 * 문제 : https://www.acmicpc.net/problem/11726
 */
import { readFileSync } from "fs";

const N = Number(readFileSync("/dev/stdin").toString().trim());

const DP = Array.from({ length: N + 1 }, () => 0);

DP[0] = 0;
DP[1] = 1;
DP[2] = 2;

for (let i = 3; i <= N; i++) {
  DP[i] = DP[i - 1] + DP[i - 2];
}

console.log(DP[N] % 10007);

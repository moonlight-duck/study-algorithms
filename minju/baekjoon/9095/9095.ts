/**
 * 카테고리 : DP
 * 문제 : https://www.acmicpc.net/problem/2839
 */

import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const N: number = Number(input[0]);
const list: number[] = input.slice(1).map(Number);

const max: number = Math.max(...list);
const DP = Array.from({ length: max + 1 }, () => 0);

DP[0] = 0;
DP[1] = 1;
DP[2] = 2;
DP[3] = 4;

for (let i = 4; i <= max; i++) {
  DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
}

for (let i = 0; i < N; i++) {
  console.log(DP[list[i]]);
}

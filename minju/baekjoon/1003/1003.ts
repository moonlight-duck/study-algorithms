/**
 * 카테고리 : DP
 * 문제 : https://www.acmicpc.net/problem/1003
 */
import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const N: number = Number(input[0]);
const list: number[] = input.slice(1).map(Number);

const max: number = Math.max.apply(null, list);
const DP: number[][] = Array.from({ length: max + 1 }, () => [0, 0]);

DP[0][0] = 1;
DP[0][1] = 0;
DP[1][0] = 0;
DP[1][1] = 1;

for (let i = 2; i <= max; i++) {
  DP[i][0] = DP[i - 1][0] + DP[i - 2][0];
  DP[i][1] = DP[i - 1][1] + DP[i - 2][1];
}

for (let i = 0; i < N; i++) {
  console.log(DP[list[i]].join(" "));
}

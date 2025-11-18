/**
 * 카테고리 : DP(LCS)
 * 문제 : https://www.acmicpc.net/problem/9251
 */
import { readFileSync } from "fs";

const [s1, s2] = readFileSync("/dev/stdin").toString().trim().split("\n");

const N = s1.length;
const M = s2.length;

const dp: number[][] = Array.from({ length: N + 1 }, () =>
  Array(M + 1).fill(0)
);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    if (s1[i - 1] === s2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}

console.log(dp[N][M]);

let result = "";
let i = N;
let j = M;

while (i > 0 && j > 0) {
  if (s1[i - 1] === s2[j - 1]) {
    result = s1[i - 1] + result;
    i--;
    j--;
  } else {
    if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
}

console.log(result);

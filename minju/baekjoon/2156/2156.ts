import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const n: number = input[0];
const dp: number[][] = Array.from({ length: n + 1 }, () => [0, 0, 0]);

dp[1][0] = 0; // 안 마심
dp[1][1] = input[1]; // 연속 1잔째
dp[1][2] = 0; // (연속 2잔째는 불가능)

for (let i = 2; i <= n; i++) {
  dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = dp[i - 1][0] + input[i];
  dp[i][2] = dp[i - 1][1] + input[i];
}

console.log(
  Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1], dp[dp.length - 1][2]),
);

import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let idx = 0;

const n = Number(input[idx++]);
const costs: number[][] = [];

for (let i = 0; i < n; i++) {
  costs.push([
    Number(input[idx++]),
    Number(input[idx++]),
    Number(input[idx++]),
  ]);
}

const dp: number[][] = Array.from({ length: n }, () => [0, 0, 0]);

if (n > 0) {
  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  for (let i = 1; i < n; i++) {
    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  console.log(Math.min.apply(null, dp[n - 1]));
}

import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const data = input[1].split(" ").map(Number);
const dp = Array.from({ length: n }, () => 0);

data.sort((a, b) => a - b);

dp[0] = data[0];

for (let i = 1; i < n; i++) {
  dp[i] = dp[i - 1] + data[i];
}

console.log(dp.reduce((a, b) => a + b, 0));

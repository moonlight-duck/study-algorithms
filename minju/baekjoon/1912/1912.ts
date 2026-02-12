import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data = input[1].slice(1).split(" ").map(Number);
const dp = Array.from({ length: data.length }, () => 0);

dp[0] = data[0];
let max = -Infinity;

for (let i = 1; i < data.length; i++) {
  dp[i] = Math.max(dp[i - 1] + data[i], data[i]);

  if (max < dp[i]) {
    max = dp[i];
  }
}

console.log(max);

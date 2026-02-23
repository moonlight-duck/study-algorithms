import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data = input[1].split(" ").map(Number);

const [n, k] = input[0].split(" ").map(Number);
const dp = Array.from({ length: n - k + 1 }, () => 0);

for (let i = 0; i < k; i++) {
  dp[0] += data[i];
}

let max = dp[0];

for (let i = 1, j = k; i <= dp.length && j < data.length; i++, j++) {
  dp[i] = dp[i - 1] + data[j] - data[j - k];
  if (max < dp[i]) max = dp[i];
}

console.log(max);

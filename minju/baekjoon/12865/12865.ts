import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);

const dp = new Array(k + 1).fill(0);

for (let i = 1; i <= n; i++) {
  const [weight, value] = input[i].split(" ").map(Number);
  for (let w = k; w >= weight; w--) {
    dp[w] = Math.max(dp[w], dp[w - weight] + value);
  }
}

console.log(dp[k]);

import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split(/\s+/);
let idx = 0;

const n = Number(input[idx++]);
const dp = new Array(n).fill(0);

dp[0] = Number(input[idx++]);

for (let i = 1; i < n; i++) {
  for (let j = i; j >= 0; j--) {
    const currentVal = Number(input[idx++]);

    if (j === 0) {
      dp[j] = dp[j] + currentVal;
    } else if (j === i) {
      dp[j] = dp[j - 1] + currentVal;
    } else {
      dp[j] = Math.max(dp[j - 1], dp[j]) + currentVal;
    }
  }
}

console.log(Math.max(...dp));

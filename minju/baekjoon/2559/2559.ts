import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data = input[1].split(" ").map(Number);

const [n, k] = input[0].split(" ").map(Number);
const dp = Array.from({ length: n - k + 1 }, () => 0);
let max = 0;

for (let i = 0; i < dp.length; i++) {
  for (let j = i; j < i + k; j++) {
    dp[i] += data[j];
  }
  if (max < dp[i]) {
    max = dp[i];
  }
}

console.log(max);

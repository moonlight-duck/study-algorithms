import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max.apply(null, input.slice(1));

const dp = Array.from({ length: max + 1 }, () => 0);

dp[1] = dp[2] = dp[3] = 1;

for (let i = 4; i <= max; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

const result: number[] = [];
for (let i = 1; i < input.length; i++) {
  result.push(dp[input[i]]);
}

console.log(result.join("\n"));

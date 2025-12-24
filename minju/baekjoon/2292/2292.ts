import { readFileSync } from "fs";
const n = Number(readFileSync("/dev/stdin").toString().trim());
const dp: number[] = [1];

let i = 1;
while (dp[dp.length - 1] < n) {
  dp[i] = dp[i - 1] + 6 * i;
  i++;
}

console.log(dp.length);

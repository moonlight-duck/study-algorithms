import { readFileSync } from "fs";

const n = Number(readFileSync("/dev/stdin").toString().trim());
const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: 10 }, () => 0n),
);
// i : 자릿수 1,2,3,,,,
// j : 숫자  1,2,3,,,9

const MOD = 1000000000n;

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1n;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) {
      dp[i][0] = dp[i - 1][1] % MOD;
    } else if (j === 9) {
      dp[i][9] = dp[i - 1][8] % MOD;
    } else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
  }
}

const result = dp[n].reduce((a, b) => a + b, 0n);

console.log((result % MOD).toString());

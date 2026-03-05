import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data = input[1].split(" ").map(Number);
const dp = Array.from({ length: data.length + 1 }, () => 0);

for (let i = 0; i < data.length; i++) {
  dp[i + 1] = dp[i] + data[i];
}

const result = [];
for (let i = 2; i < input.length; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  result.push(dp[end] - dp[start - 1]);
}

console.log(result.join("\n"));

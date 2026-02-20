import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const electricWires: Array<number[]> = [];

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  electricWires.push([a, b]);
}

electricWires.sort((a, b) => {
  return a[0] - b[0];
});

const dp: number[] = Array.from({ length: n }, () => 1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (electricWires[j][1] < electricWires[i][1])
      dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(n - Math.max.apply(null, dp));

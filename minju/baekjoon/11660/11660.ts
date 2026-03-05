import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);

const data = input.slice(1, n + 1).map((x) => x.split(" ").map(Number));
const sum = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => 0),
);

for (let i = 1; i < sum.length; i++) {
  for (let j = 1; j < sum.length; j++) {
    sum[i][j] += sum[i][j - 1] + data[i - 1][j - 1];
  }
  if (i < sum.length - 1) sum[i + 1][0] = sum[i][sum.length - 1];
}

const result = [];
for (let i = n + 1; i < input.length; i++) {
  const [sr, sc, er, ec] = input[i].split(" ").map(Number);

  let tempSum = 0;
  for (let j = sr; j <= er; j++) {
    tempSum += sum[j][ec] - sum[j][sc - 1];
  }
  result.push(tempSum);
}

console.log(result.join("\n"));

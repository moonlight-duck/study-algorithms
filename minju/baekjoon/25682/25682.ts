import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);

const box: string[] = [];
for (let i = 1; i < input.length; i++) {
  box.push(input[i]);
}

const sumA = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    const targetColor = (i + j) % 2 === 0 ? "B" : "W";
    const diff = box[i - 1][j - 1] !== targetColor ? 1 : 0;

    sumA[i][j] = diff + sumA[i - 1][j] + sumA[i][j - 1] - sumA[i - 1][j - 1];
  }
}

let min = Infinity;

for (let i = k; i <= n; i++) {
  for (let j = k; j <= m; j++) {
    const currentSumA =
      sumA[i][j] - sumA[i - k][j] - sumA[i][j - k] + sumA[i - k][j - k];

    const currentSumB = k * k - currentSumA;

    const currentMin = currentSumA < currentSumB ? currentSumA : currentSumB;
    if (currentMin < min) min = currentMin;
  }
}

console.log(min);

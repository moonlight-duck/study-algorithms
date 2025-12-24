import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const a = Array.from({ length: n }, (_, index) =>
  input[index + 1].split(" ").map(Number)
);

const b = Array.from({ length: n }, (_, index) =>
  input[index + (n + 1)].split(" ").map(Number)
);

for (let i = 0; i < n; i++) {
  const temp: number[] = [];
  for (let j = 0; j < m; j++) {
    temp.push(a[i][j] + b[i][j]);
  }
  console.log(temp.join(" "));
}

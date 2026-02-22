import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const data = input[1].split(" ").map(Number);

const increase: number[] = Array.from({ length: n }, () => 1);
const decrease: number[] = Array.from({ length: n }, () => 1);

for (let i = 0; i < n; i++) {
  increase[i] = 1;
  for (let j = 0; j < i; j++) {
    if (data[j] < data[i]) {
      increase[i] = Math.max(increase[i], increase[j] + 1);
    }
  }
}

for (let i = n - 1; i >= 0; i--) {
  decrease[i] = 1;
  for (let j = n - 1; j > i; j--) {
    if (data[j] < data[i]) {
      decrease[i] = Math.max(decrease[i], decrease[j] + 1);
    }
  }
}

let maxLen = 0;
for (let i = 0; i < n; i++) {
  maxLen = Math.max(maxLen, increase[i] + decrease[i] - 1);
}

console.log(maxLen);

import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const s = new Set(input.slice(1, n + 1));

let cnt = 0;
for (let i = input.length; i >= input.length - m; i--) {
  if (s.has(input[i])) {
    cnt++;
  }
}
console.log(cnt);
